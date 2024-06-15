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
import { PAYMENT_ERRORS, PaymentErrorTypes } from '@/config/registration';
import { useLang } from '@/providers';

const PaymentSuccess = () => {
	const param = useSearchParams();
	const className = param.get('class');
	const error = param.get('error') as PaymentErrorTypes;
	const { language } = useLang();
	return (
		<FlexCenter className='bg-teal-900/20 mb-[-2rem]'>
			<Card>
				<CardHeader>
					<CardTitle>Payment Failed!</CardTitle>
					<CardDescription>{className}</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Your payment is failed for this reason:</p>
					<p>{PAYMENT_ERRORS[error] ?? 'Unknown'}</p>
					{error === 'UNKNOWN_ERROR' && <p>{param.get('reason')}</p>}
				</CardContent>
				<CardFooter className='flex justify-center items-center'>
					<Link
						href={`/${language}/payment`}
						className='underline underline-offset-4'
					>
						Go back to Payment Page
					</Link>
				</CardFooter>
			</Card>
		</FlexCenter>
	);
};

export default PaymentSuccess;
