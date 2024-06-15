'use client';

import React from 'react';
import Link from 'next/link';
import { Languages } from '@/lib/langs/types';
import { useLang } from '@/providers';

export const TermsOfServiceLink = ({ lang }: { lang?: Languages }) => {
	const { language } = useLang();
	return (
		<Link
			href={`/${lang ?? language}/about/terms`}
			className='underline text-blue-600 text-xs'
			aria-label='move to terms of service page'
		>
			{language === 'en' ? 'Terms of Service' : '서비스 이용정책'}
		</Link>
	);
};
export default TermsOfServiceLink;
