import SubNav from '@/entities/SubNav';
import React from 'react';
import { COURSES_LIST, courseTitles } from './consts';
import FullWidth from '@/layouts/FullWidth';
import { convertNavList } from '@/lib/langs/convertNavList';
import { Languages } from '@/lib/langs/types';
import BackHeader from '@/entities/BackHeader';

const layout = ({
    children,
    params: { lang },
}: {
    children: React.ReactNode;
    params: { lang: Languages };
}) => {
    const courseTitle = courseTitles[lang] ?? courseTitles.en;
    const convertedNavList = convertNavList(COURSES_LIST, lang);
    return (
        <FullWidth>
            <SubNav navList={convertedNavList} titles={courseTitle} />
            <div className='w-full max-w-[800px] mx-auto my-4 px-4'>
                {children}
            </div>
            <BackHeader>COURSES</BackHeader>
        </FullWidth>
    );
};

export default layout;
