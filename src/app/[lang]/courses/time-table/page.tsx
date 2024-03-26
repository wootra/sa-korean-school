import React from 'react';
import TimeTable from './TimeTable';
import { Languages } from '@/lib/langs/types';

// export const dynamic = 'force-dynamic';

const TimeTablePage = ({
    params: { lang },
}: {
    params: { lang: Languages };
}) => {
    return <TimeTable lang={lang} />;
};

export default TimeTablePage;
