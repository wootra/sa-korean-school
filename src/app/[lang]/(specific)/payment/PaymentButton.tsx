'use client';

import React, { FormEventHandler, PropsWithChildren } from 'react';
import { Button } from '@/components/ui/button';
// import { RedirectType, redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { paymentInfo } from './constants';
import { PaymentOptions } from '@/config/registration';
import { Languages } from '@/lib/langs/types';
type Props = {
    payId: PaymentOptions;
    lang: Languages;
};
const PaymentButton = ({ payId, lang, children }: PropsWithChildren<Props>) => {
    const info = paymentInfo[payId];
    const router = useRouter();
    const onSubmit: FormEventHandler<HTMLFormElement> = async e => {
        e.preventDefault();
        // const func = async () => {
        const ret = await fetch(
            `/api/checkout_sessions?class=${payId}&lang=${lang}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify({
                //     payment_method: {
                //         card: {
                //             number: e.target.number.value,
                //             exp_month: e.target.exp_month.value,
                //             exp_year: e.target.exp_year.value,
                //             cvc: e.target.cvc.value,
                //         },
                //     },
                // }),
            }
        );
        const json = await ret.json();
        console.log('what is json?', json);
        const session = json;
        if (session?.url) {
            // return NextResponse.json({ sessionId: session.id });
            // redirect(session.url);
            router.replace(session.url);
            // redirect(session.url, RedirectType.replace);
        } else {
            // redirect(
            //     `${origin}/${lang}/payment/failed?error=NO_SUCH_CLASS&class=${payId}`,
            //     RedirectType.replace
            // );
            router.replace(
                `${origin}/${lang}/payment/failed?error=NO_SUCH_CLASS&class=${payId}`
            );
        }
        // };
        // func();
    };
    return (
        <form
            // action={`/api/checkout_sessions?class=${payId}&lang=${lang}`}
            // method='POST'
            onSubmit={onSubmit}
            className='w-full h-full'
        >
            <Card className='w-full flex flex-col h-full'>
                <CardHeader>
                    <CardTitle>{children}</CardTitle>
                    <CardDescription>
                        {`$ ` + info.price.toFixed(2)}
                    </CardDescription>
                </CardHeader>
                <CardContent className='w-full flex-1'>
                    <p>{info.desc}</p>
                </CardContent>
                <CardFooter>
                    <Button
                        type='submit'
                        variant={'default'}
                        role='button'
                        className='w-full h-8 mt-4 rounded-sm'
                    >
                        Payment
                    </Button>
                </CardFooter>
            </Card>
        </form>
    );
};

export default PaymentButton;
