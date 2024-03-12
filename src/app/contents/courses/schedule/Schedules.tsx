'use server';

import { Heading } from '@/entities';
import { multiLineText } from '@/lib/jsxUtils';
import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

const Cell = async ({
    children,
    className,
    id,
    title,
}: {
    children: ReactNode;
    className: string;
    id: string;
    title?: string;
}) => {
    return (
        <div
            className={cn(
                className,
                'p-2 flex flex-row gap-2 md:items-center md:justify-center text-sm'
            )}
            data-id={id}
        >
            {title && (
                <span className='inline-block md:hidden text-slate-500 text-xs'>{`${title}:`}</span>
            )}
            <div className='flex flex-col '>{children}</div>
        </div>
    );
};

const Schedules = async () => {
    const spreadsheetId = process.env.COURSE_SCHEDULE_ID;
    const fields = 'sheets.data.rowData.values.formattedValue';
    const apiKey = 'AIzaSyDtV7r8s4HwKQDetTeS13lcRtVw2VE5tqg';
    const bound = 'Sheet1!A2:F30';
    const resp = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?includeGridData=true&ranges=${bound}&fields=${fields}`,
        {
            method: 'GET',
            headers: {
                'X-goog-api-key': apiKey,
                'Content-Type': 'application/json; charset=utf-8',
            },
        }
    );
    const data = await resp.json();
    const rows = data.sheets[0].data[0].rowData ?? []; //[0].values ?? [];
    return (
        <>
            <Heading type='page'>학사 일정</Heading>
            <ul className='mx-auto flex flex-col gap-[1px] bg-slate-300 border border-gray-400'>
                <li
                    className={cn(
                        'hidden justify-start items-start gap-0 md:grid grid-cols-12 hover:bg-green-100 transition-colors',
                        ' bg-gray-200 font-extrabold'
                    )}
                >
                    <Cell className='col-span-2' id='date'>
                        Class Date
                    </Cell>
                    <Cell className='col-span-3' id='event-activity'>
                        Event & Activities
                    </Cell>
                    <Cell className='col-span-4' id='culture-class'>
                        Culture or History Class
                    </Cell>
                    <Cell className='col-span-1' id='lunch'>
                        Lunch
                    </Cell>
                    <Cell className='col-span-2' id='pta'>
                        PTA
                    </Cell>
                </li>
                {rows.map(
                    (
                        rowData: { values: { formattedValue?: string }[] },
                        idx: number
                    ) => {
                        const row = rowData.values;
                        return (
                            <li
                                className={cn(
                                    'flex flex-col justify-start items-start gap-0 md:grid grid-cols-12 hover:bg-green-100 transition-colors',
                                    !row[0].formattedValue
                                        ? 'bg-slate-300'
                                        : 'bg-white'
                                )}
                                key={'row-' + idx}
                            >
                                {row[1] && (
                                    <Cell
                                        className='col-span-2'
                                        id='date'
                                        title='Date'
                                    >
                                        {multiLineText(row[1].formattedValue)}
                                    </Cell>
                                )}
                                {row[2] && (
                                    <Cell
                                        className='col-span-3'
                                        id='event-activity'
                                        title='Event & Activities'
                                    >
                                        {multiLineText(
                                            row[2].formattedValue,
                                            true
                                        )}
                                    </Cell>
                                )}
                                {row[3] && (
                                    <Cell
                                        className='col-span-4'
                                        id='culture-class'
                                        title='Culture or History Class'
                                    >
                                        {multiLineText(
                                            row[3].formattedValue,
                                            true
                                        )}
                                    </Cell>
                                )}
                                {row[4] && (
                                    <Cell
                                        className='col-span-1'
                                        id='lunch'
                                        title='Lunch'
                                    >
                                        {multiLineText(
                                            row[4].formattedValue,
                                            true
                                        )}
                                    </Cell>
                                )}
                                {row[5] && (
                                    <Cell
                                        className='col-span-2'
                                        id='pta'
                                        title='PTA'
                                    >
                                        {multiLineText(
                                            row[5].formattedValue,
                                            true
                                        )}
                                    </Cell>
                                )}
                            </li>
                        );
                    }
                )}
            </ul>
        </>
    );
};

export default Schedules;
