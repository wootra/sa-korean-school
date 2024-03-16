'use client';

import FlexCenter from '@/layouts/FlexCenter';
import React from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const PaymentSuccess = () => {
    const param = useSearchParams();
    const className = param.get('class');
    return (
        <FlexCenter className='bg-teal-900/20 mb-[-2rem]'>
            <Card>
                <CardHeader>
                    <CardTitle>Payment Succeed!</CardTitle>
                    <CardDescription>{className}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Your payment is successfully paid!</p>
                </CardContent>
                <CardFooter className='flex justify-center items-center'>
                    <Link
                        href='/entry'
                        className='underline underline-offset-4'
                    >
                        Home
                    </Link>
                </CardFooter>
            </Card>
        </FlexCenter>
    );
};

export default PaymentSuccess;
