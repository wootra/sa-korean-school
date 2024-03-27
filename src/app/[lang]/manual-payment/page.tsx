import React from 'react';
import ManualPaymentInfo from './ManualPaymentInfo';
import { Languages } from '@/lib/langs/types';

const page = ({ params: { lang } }: { params: { lang: Languages } }) => {
    return (
        <div>
            <ManualPaymentInfo lang={lang} />
        </div>
    );
};

export default page;
