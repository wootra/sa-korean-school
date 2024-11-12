import React from 'react';
import CenterMain from '@/layouts/CenterMain';
import AboutIntro from './AboutIntro';
import { Languages } from '@/lib/langs/types';

const AboutPage = ({ params: { lang } }: { params: { lang: string } }) => {
    return (
        <CenterMain className='my-4'>
            <AboutIntro lang={lang as Languages} />
        </CenterMain>
    );
};

export default AboutPage;
