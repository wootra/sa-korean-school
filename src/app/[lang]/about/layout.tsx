import SubNav from '@/entities/SubNav';
import React from 'react';
import { ABOUT_LIST } from './consts';
import FullWidth from '@/layouts/FullWidth';
import { convertNavList } from '@/lib/langs/convertNavList';
import { Languages } from '@/lib/langs/types';
import BackHeader from '@/entities/BackHeader';

const layout = ({
    children,
    params: { lang },
}: {
    children: React.ReactNode;
    params: { lang: string };
}) => {
    const list = ABOUT_LIST[lang as Languages] ?? ABOUT_LIST.en;
    const convertedNavList = convertNavList(list, lang);
    return (
        <FullWidth>
            <SubNav navList={convertedNavList} />
            {children}
            <BackHeader>ABOUT US</BackHeader>
        </FullWidth>
    );
};

export default layout;
