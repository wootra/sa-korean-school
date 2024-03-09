import { PAYMENTS } from '@/config/registration';
import stripe from '@/config/stripe';
import { RedirectType, redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

const classCodes = Object.freeze({
    [PAYMENTS.PREREG]: process.env.PREREGISTER_CLASS_PRICE,
    [PAYMENTS.NOREG]: process.env.NOREGISTER_CLASS_PRICE,
});

const getUserInfo = async (token?: string | null) => {
    if (token) {
        console.log('token', token);
        const url = `https://graph.facebook.com/v19.0/me?access_token=${token}&debug=all&fields=id%2Cname%2Cemail&format=json&method=get&origin_graph_explorer=1&pretty=0&suppress_http_code=1&transport=cors`;

        try {
            const user = await fetch(url).then(r => r.json());
            if (user) {
                return { customer_email: user.email };
            }
        } catch (e) {
            console.error('failed fetching login info from token', e);
        }
    }
    return {};
};
export async function POST(req: NextRequest, res: NextResponse) {
    const origin = req.headers.get('origin');
    console.log('host is', origin);
    // try {
    // Create Checkout Sessions from body params.
    const query = req.nextUrl.searchParams;
    const className = query.get('class');
    console.log('className is ', className);
    // console.log(query);
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

    // res.redirect(303, session.url);
    // } catch (err: unknown) {
    //     const message = (err as any)?.message || 'Internal server error';
    //     redirect(
    //         `${origin}/payment/failed?message=${message}`,
    //         RedirectType.replace
    //     );
    // }
}
