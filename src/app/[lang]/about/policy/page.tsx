import React from 'react';
import CenterMain from '@/layouts/CenterMain';
import Policy from './Policy';
import { Languages } from '@/lib/langs/types';

const PolicyPage = ({ params: { lang } }: { params: { lang: string } }) => {
    return (
        <CenterMain className='my-4'>
            <Policy lang={lang as Languages} />
        </CenterMain>
    );
};

export default PolicyPage;
