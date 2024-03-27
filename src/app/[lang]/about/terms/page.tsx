import React from 'react';
import CenterMain from '@/layouts/CenterMain';
import TermsOfService from './TermsOfService';
import { Languages } from '@/lib/langs/types';

const TermsPage = ({ params: { lang } }: { params: { lang: string } }) => {
    return (
        <CenterMain className='my-4'>
            <TermsOfService lang={lang as Languages} />
        </CenterMain>
    );
};

export default TermsPage;
