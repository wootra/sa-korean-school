import React, { PropsWithChildren } from 'react';
import { Button } from '@/components/ui/button';
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
type Props = {
    payId: PaymentOptions;
};
const PaymentButton = ({ payId, children }: PropsWithChildren<Props>) => {
    const info = paymentInfo[payId];
    return (
        <form
            action={`/api/checkout_sessions?class=${payId}`}
            method='POST'
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
