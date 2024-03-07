import stripe from '@/config/stripe';
import { RedirectType, redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
    const origin = req.headers.get('origin');
    console.log('host is', origin);
    // try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: 'price_1OqLMQIfA3daNAk6s7DupTKZ',
                quantity: 1,
            },
        ],
        currency: 'usd',
        mode: 'payment',
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
