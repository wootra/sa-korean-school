import SubNav from '@/entities/SubNav';
import React from 'react';
import { EVENT_LIST } from './consts';
import FullWidth from '@/layouts/FullWidth';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <FullWidth>
            <SubNav navList={EVENT_LIST} />
            <div className='w-full max-w-[800px] mx-auto my-4 px-4'>
                {children}
            </div>
        </FullWidth>
    );
};

export default layout;
