import { PAYMENTS } from '@/config/registration';
import stripe from '@/config/stripe';
// import {
//     getAuthInfoFromRequest,
//     getUserInfo,
// } from '@/lib/auth/facebook/server/getUserInfo';
import { RedirectType, redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

const classCodes = Object.freeze({
    [PAYMENTS.DEPOSIT]: process.env.CLASS_PRICE_DEPOSIT,
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
        console.error(
            '=== class code for ' + className + ' does not exist in classCodes'
        );
        redirect(
            `${origin}/${lang}/payment/failed?error=NO_SUCH_PAYMENT_PLAN&class=${className}`,
            RedirectType.replace
        );
    }
    try {
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
        // return session;
        if (session) {
            // if (session.url) {
            //     // return NextResponse.json({ sessionId: session.id });
            //     redirect(session.url);
            //     // redirect(session.url, RedirectType.replace);
            // } else {
            //     redirect(
            //         `${origin}/${lang}/payment/failed?error=NO_SUCH_CLASS&class=${className}`,
            //         RedirectType.replace
            //     );
            // }
            console.log('success');
            return NextResponse.json(session);
        } else {
            redirect(
                `${origin}/${lang}/payment/failed?error=NO_SESSION&class=${className}`,
                RedirectType.replace
            );
        }
    } catch (error) {
        console.error('error on payment', error);
        redirect(
            `${origin}/${lang}/payment/failed?error=UNKNOWN_ERROR&class=${className}&reason=${
                typeof error === 'string' ? error : (error as Error).message
            }`,
            RedirectType.replace
        );
    }
}
