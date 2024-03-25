import SubNav from '@/entities/SubNav';
import React from 'react';
import { EVENT_LIST } from './consts';
import FullWidth from '@/layouts/FullWidth';
import { convertNavList } from '@/lib/langs/convertNavList';

const layout = ({
    children,
    params: { lang },
}: {
    children: React.ReactNode;
    params: { lang: string };
}) => {
    const convertedNavList = convertNavList(EVENT_LIST, lang);
    return (
        <FullWidth>
            <SubNav navList={convertedNavList} />
            <div className='w-full max-w-[800px] mx-auto my-4 px-4'>
                {children}
            </div>
        </FullWidth>
    );
};

export default layout;
