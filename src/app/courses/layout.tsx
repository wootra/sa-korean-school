import SubNav from '@/entities/SubNav';
import React from 'react';
import { COURSES_LIST } from './consts';
import FullWidth from '@/layouts/FullWidth';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <FullWidth>
            <SubNav navList={COURSES_LIST} />
            {children}
        </FullWidth>
    );
};

export default layout;
