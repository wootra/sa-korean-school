'use server';

import { Heading } from '@/entities';
import { multiLineText } from '@/lib/jsxUtils';
import { cn } from '@/lib/utils';
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
                'flex flex-col p-2 items-center justify-center text-xs'
            )}
            data-id={id}
        >
            {children}
        </div>
    );
};
const Schedules = async () => {
    const spreadsheetId = process.env.COURSE_INTRO_ID;
    const fields = 'sheets.data.rowData.values.formattedValue';
    const apiKey = process.env.GOOGLE_SHEET_API_KEY;
    const bound = 'Sheet1!A1:C30';
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
            <Heading type='page'>과정 소개</Heading>
            <ul className='mx-auto flex flex-col gap-[1px] bg-slate-300 border border-gray-400'>
                {rows.map(
                    (
                        rowData: { values: { formattedValue?: string }[] },
                        idx: number
                    ) => {
                        const row = rowData.values;
                        const color = row[2]?.formattedValue ?? 'black';
                        return (
                            <li
                                className={cn(
                                    'grid grid-cols-12 hover:bg-green-100 transition-colors',
                                    idx === 0
                                        ? ' bg-gray-200'
                                        : !row[0].formattedValue
                                        ? 'bg-slate-300'
                                        : 'bg-white'
                                )}
                                key={'row-' + idx}
                            >
                                {row[0] && (
                                    <Cell
                                        className='col-span-3 flex flex-col relative'
                                        id='class-name'
                                    >
                                        {' '}
                                        <div
                                            className='absolute left-0 inset-y-0 w-1'
                                            style={{ backgroundColor: color }}
                                        ></div>
                                        {multiLineText(row[0].formattedValue)}
                                    </Cell>
                                )}
                                {row[1] && (
                                    <Cell
                                        className='col-span-9 text-left'
                                        id='description'
                                    >
                                        {multiLineText(row[1].formattedValue)}
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
