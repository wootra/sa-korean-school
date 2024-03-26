import React from 'react';
import Schedules from './Schedules';
import { Languages } from '@/lib/langs/types';

// export const dynamic = 'force-dynamic';

const SchedulePage = ({
    params: { lang },
}: {
    params: { lang: Languages };
}) => {
    return <Schedules lang={lang} />;
};

export default SchedulePage;
