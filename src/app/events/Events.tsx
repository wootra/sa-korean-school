'use server';

import { Heading } from '@/entities';
import { multiLineText } from '@/lib/jsxUtils';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { ReactNode } from 'react';

const Cell = async ({
    children,
    className,
    id,
}: {
    children: ReactNode;
    className: string;
    id: string;
}) => {
    return (
        <div
            className={cn(
                className,
                'flex flex-col p-2 items-center justify-center'
            )}
            data-id={id}
        >
            {children}
        </div>
    );
};

const Events = async () => {
    const spreadsheetId = process.env.ABOUT_EVENTS_ID;
    const fields = 'sheets.data.rowData.values.formattedValue';
    const apiKey = 'AIzaSyDtV7r8s4HwKQDetTeS13lcRtVw2VE5tqg';
    const bound = 'Sheet1!A2:C100';
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
    const rows: { values: { formattedValue?: string }[] }[] =
        data.sheets[0].data[0].rowData ?? []; //[0].values ?? [];
    const tableGroups = rows.reduce((obj, row) => {
        const classGroup = row.values[0].formattedValue;
        if (classGroup) {
            if (!obj[classGroup]) {
                obj[classGroup] = [];
            }
            obj[classGroup].push(row.values.map(v => v.formattedValue));
        }
        // row.values[0].formattedValue;
        return obj;
    }, {} as Record<string, (string | undefined)[][]>);
    return (
        <div className='w-full max-w-[800px] mx-auto my-4 flex flex-col gap-8'>
            {Object.keys(tableGroups).map(classGroup => (
                <div key={classGroup}>
                    <Heading type='page'>{classGroup}</Heading>
                    <ul className='mx-auto flex flex-col gap-[1px] bg-slate-300 border border-gray-400'>
                        <li
                            className={cn(
                                'grid grid-cols-12 hover:bg-green-100 transition-colors text-sm',
                                ' bg-gray-200'
                            )}
                        >
                            <Cell className='col-span-4' id='date'>
                                {multiLineText('행사명\nName', true)}
                            </Cell>
                            <Cell className='col-span-4' id='event-activity'>
                                {multiLineText('행사 날짜\nDate', true)}
                            </Cell>
                            <Cell className='col-span-4' id='date'>
                                {multiLineText('행사 위치\nLocation', true)}
                            </Cell>
                        </li>

                        {tableGroups[classGroup].map((row, idx: number) => {
                            return (
                                <li
                                    className={cn(
                                        'grid grid-cols-12 hover:bg-green-100 transition-colors text-sm',

                                        'bg-white'
                                    )}
                                    key={'row-' + idx}
                                >
                                    {row[1] && (
                                        <Cell className='col-span-4' id='date'>
                                            {row[1]}
                                        </Cell>
                                    )}
                                    {row[1] && (
                                        <Cell
                                            className='col-span-4'
                                            id='event-activity'
                                        >
                                            {row[2] ?? 'TBD'}
                                        </Cell>
                                    )}
                                    {row[1] && (
                                        <Cell
                                            className='col-span-4'
                                            id='event-activity'
                                        >
                                            {row[3] && row[4] ? (
                                                <Link
                                                    href={row[4]}
                                                    aria-label={`location for ${row[1]}`}
                                                >
                                                    {row[3]}
                                                </Link>
                                            ) : (
                                                row[3] ?? 'TBD'
                                            )}
                                        </Cell>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Events;