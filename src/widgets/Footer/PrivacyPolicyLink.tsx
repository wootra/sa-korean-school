'use client';

import React from 'react';
import Link from 'next/link';
import { Languages } from '@/lib/langs/types';
import { useLang } from '@/lib/LangContext';

export const PrivacyPolicyLink = ({ lang }: { lang?: Languages }) => {
    const { language } = useLang();
    return (
        <Link
            href={`/${lang ?? language}/about/policy`}
            className='underline text-blue-600 text-xs'
            aria-label='move to google map'
        >
            {language === 'en' ? 'Privacy Policy' : '개인정보취급정책'}
        </Link>
    );
};
export default PrivacyPolicyLink;
