import { PAYMENTS } from '@/config/registration';
import stripe from '@/config/stripe';
import { getUserInfo } from '@/lib/auth/server/getUserInfo';
import { RedirectType, redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

const classCodes = Object.freeze({
    [PAYMENTS.PREREG]: process.env.PREREGISTER_CLASS_PRICE,
    [PAYMENTS.NOREG]: process.env.NOREGISTER_CLASS_PRICE,
});

export async function POST(req: NextRequest, res: NextResponse) {
    const origin = req.headers.get('origin');
    // try {
    // Create Checkout Sessions from body params.
    const query = req.nextUrl.searchParams;
    const className = query.get('class');
    const body = await req.formData();
    const token = body.get('token');
    const userInfo = await getUserInfo(token as string | null);
    const price = classCodes[className as keyof typeof classCodes];
    if (!price) {
        redirect(
            `${origin}/payment/failed?message=${'payment name does not exist'}`,
            RedirectType.replace
        );
    }
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price,
                quantity: 1,
            },
        ],
        ...userInfo,
        currency: 'usd',
        mode: 'payment',
        payment_method_types: ['card'],
        success_url: `${origin}/payment/success?success=true`,
        cancel_url: `${origin}/payment?canceled=true`,
    });
    if (session) {
        if (session.url) {
            // return NextResponse.json({ sessionId: session.id });
            redirect(session.url, RedirectType.replace);
        } else {
            redirect(
                `${origin}/payment/failed?message=${'session.url does not exist'}`,
                RedirectType.replace
            );
        }
    } else {
        redirect(
            `${origin}/payment/failed?message=${'session does not exist'}`,
            RedirectType.replace
        );
    }
}
