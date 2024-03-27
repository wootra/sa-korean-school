import { Heading } from '@/entities';
import { multiLineText } from '@/lib/jsxUtils';
import React from 'react';
import { privacyPolicy } from './consts';
import { Languages } from '@/lib/langs/types';

const Policy = ({ lang }: { lang: Languages }) => {
    const policyInfo = privacyPolicy[lang] ?? privacyPolicy.en;
    return (
        <div className='flex flex-col max-w-[640px] w-full mx-auto gap-4 px-4'>
            <Heading type='page'>{policyInfo.heading}</Heading>
            <section className='text-sm p-4 bg-slate-200 rounded-md shadow-sm flex flex-col'>
                {multiLineText(policyInfo.description, false)}
            </section>
        </div>
    );
};

export default Policy;
