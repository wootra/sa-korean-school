import SubNav from '@/entities/SubNav';
import React from 'react';
import { EVENT_LIST, eventTitles } from './consts';
import FullWidth from '@/layouts/FullWidth';
import { convertNavList } from '@/lib/langs/convertNavList';
import { Languages } from '@/lib/langs/types';

const layout = ({
    children,
    params: { lang },
}: {
    children: React.ReactNode;
    params: { lang: Languages };
}) => {
    const convertedNavList = convertNavList(EVENT_LIST, lang);
    const titles = eventTitles[lang] ?? eventTitles.en;
    return (
        <FullWidth>
            <SubNav navList={convertedNavList} titles={titles} />
            <div className='w-full max-w-[800px] mx-auto my-4 px-4'>
                {children}
            </div>
        </FullWidth>
    );
};

export default layout;
