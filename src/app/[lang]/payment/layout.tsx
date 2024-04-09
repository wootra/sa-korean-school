import React from 'react';
import FullWidth from '@/layouts/FullWidth';
import BackHeader from '@/entities/BackHeader';
import { convertNavList } from '@/lib/langs/convertNavList';
import { Languages } from '@/lib/langs/types';
import { PAYMENT_LIST, paymentTitles } from './constants';
import SubNav from '@/entities/SubNav';

const layout = ({
    children,
    params: { lang },
}: {
    children: React.ReactNode;
    params: { lang: Languages };
}) => {
    const convertedNavList = convertNavList(PAYMENT_LIST, lang);
    const titles = paymentTitles[lang] ?? paymentTitles.en;
    return (
        <FullWidth>
            <SubNav navList={convertedNavList} titles={titles} />
            <div className='w-full max-w-[800px] mx-auto my-4'>{children}</div>
            <BackHeader>PAYMENTS</BackHeader>
        </FullWidth>
    );
};

export default layout;
