import SubNav from '@/entities/SubNav';
import React from 'react';
import { ABOUT_LIST } from './consts';
import FullWidth from '@/layouts/FullWidth';
import { convertNavList } from '@/lib/langs/convertNavList';

const layout = ({
    children,
    params: { lang },
}: {
    children: React.ReactNode;
    params: { lang: string };
}) => {
    const convertedNavList = convertNavList(ABOUT_LIST, lang);
    return (
        <FullWidth>
            <SubNav navList={convertedNavList} />
            {children}
        </FullWidth>
    );
};

export default layout;
