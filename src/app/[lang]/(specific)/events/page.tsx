import CenterMain from '@/layouts/CenterMain';
import React from 'react';
import Events from './Events';
import { Languages } from '@/lib/langs/types';

const EventsPage = ({ params: { lang } }: { params: { lang: Languages } }) => {
    return (
        <CenterMain>
            <Events lang={lang} />
        </CenterMain>
    );
};

export default EventsPage;
