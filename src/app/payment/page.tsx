import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import CenterMain from '@/layouts/CenterMain';
import PaymentButton from './PaymentButton';
import { PAYMENTS } from '@/config/registration';
import ResponsiveGridMain from '@/layouts/ResponsiveGridMain';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ''
);
export default async function PreviewPage() {
    // React.useEffect(() => {
    //     // Check to see if this is a redirect back from Checkout
    //     const query = new URLSearchParams(window.location.search);
    //     if (query.get('success')) {
    //         console.log(
    //             'Order placed! You will receive an email confirmation.'
    //         );
    //     }

    //     if (query.get('canceled')) {
    //         console.log(
    //             'Order canceled -- continue to shop around and checkout when you’re ready.'
    //         );
    //     }
    // }, []);

    return (
        <ResponsiveGridMain>
            <PaymentButton payId={PAYMENTS.PREREG}>
                Payment for a Class(pre registered)
            </PaymentButton>
            <PaymentButton payId={PAYMENTS.NOREG}>
                Payment for an class(first register)
            </PaymentButton>
            <PaymentButton payId={PAYMENTS.NOREG}>
                Payment for an after School Class
            </PaymentButton>
        </ResponsiveGridMain>
    );
}
