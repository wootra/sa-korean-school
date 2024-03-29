import { PAYMENTS } from '@/config/registration';
import stripe from '@/config/stripe';
// import {
//     getAuthInfoFromRequest,
//     getUserInfo,
// } from '@/lib/auth/facebook/server/getUserInfo';
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
    const lang = query.get('lang');
    // const authInfo = await getAuthInfoFromRequest(req);
    // const userInfo = await getUserInfo(authInfo);
    const stripeUserInfo = {};
    const price = classCodes[className as keyof typeof classCodes];
    if (!price) {
        redirect(
            `${origin}/${lang}/payment/failed?error=NO_SUCH_PAYMENT_PLAN&class${className}`,
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
        ...stripeUserInfo,
        currency: 'usd',
        mode: 'payment',
        payment_method_types: ['card'],
        success_url: `${origin}/${lang}/payment/success?class=${className}`,
        cancel_url: `${origin}/${lang}/payment/canceled?class=${className}`,
    });
    if (session) {
        if (session.url) {
            // return NextResponse.json({ sessionId: session.id });
            redirect(session.url, RedirectType.replace);
        } else {
            redirect(
                `${origin}/${lang}/payment/failed?error=NO_SUCH_CLASS&class=${className}`,
                RedirectType.replace
            );
        }
    } else {
        redirect(
            `${origin}/${lang}/payment/failed?error=NO_SESSION&class=${'className'}`,
            RedirectType.replace
        );
    }
}
