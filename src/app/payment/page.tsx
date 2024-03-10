import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import PaymentButton from './PaymentButton';
import { PAYMENTS } from '@/config/registration';
import ResponsiveGridMain from '@/layouts/ResponsiveGridMain';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import TopMain from '@/layouts/TopMain';
import AccordionManager from './AccordionManager';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ''
);
export default function PaymentPage() {
    return (
        <TopMain>
            <AccordionManager />
            <Accordion type='single' collapsible className='w-full'>
                <AccordionItem
                    value='registration-payment-group'
                    id='registration-payment-group'
                >
                    <AccordionTrigger>Class Registration</AccordionTrigger>
                    <AccordionContent className='bg-blue-100'>
                        <ResponsiveGridMain>
                            <PaymentButton payId={PAYMENTS.PREREG}>
                                Class Regisration
                                <br />
                                (pre registered)
                            </PaymentButton>
                            <PaymentButton payId={PAYMENTS.NOREG}>
                                Class Registration
                                <br />
                                (first register)
                            </PaymentButton>
                            <PaymentButton payId={PAYMENTS.NOREG}>
                                an after School Class
                            </PaymentButton>
                        </ResponsiveGridMain>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='donation-group' id='donation-group'>
                    <AccordionTrigger>Donation</AccordionTrigger>
                    <AccordionContent className='bg-green-100'>
                        <ResponsiveGridMain>
                            <PaymentButton payId={PAYMENTS.PREREG}>
                                Class Regisration
                                <br />
                                (pre registered)
                            </PaymentButton>
                            <PaymentButton payId={PAYMENTS.NOREG}>
                                Class Registration
                                <br />
                                (first register)
                            </PaymentButton>
                            <PaymentButton payId={PAYMENTS.NOREG}>
                                an after School Class
                            </PaymentButton>
                        </ResponsiveGridMain>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </TopMain>
    );
}
