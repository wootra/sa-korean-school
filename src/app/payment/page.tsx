'use client';

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@/components/ui/button';
import CenterMain from '@/layouts/CenterMain';
import { useAuth } from '../SessionContext';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ''
);
export default function PreviewPage() {
    React.useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
            console.log(
                'Order placed! You will receive an email confirmation.'
            );
        }

        if (query.get('canceled')) {
            console.log(
                'Order canceled -- continue to shop around and checkout when you’re ready.'
            );
        }
    }, []);
    const user = useAuth();

    return (
        <CenterMain>
            <form action={`/api/checkout_sessions?class=`} method='POST'>
                {user.token && (
                    <input type='hidden' name='token' value={user.token} />
                )}
                <Button
                    type='submit'
                    variant={'default'}
                    role='button'
                    className='w-40 h-8 rounded-sm'
                >
                    Payment for the Class
                </Button>
            </form>
        </CenterMain>
    );
}
