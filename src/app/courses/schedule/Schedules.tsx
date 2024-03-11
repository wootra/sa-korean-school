'use server';

import { Heading } from '@/entities';
import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

const multiLineText = (txt: string | undefined) => {
    return (txt ?? '').split('\n').map(line => (
        <span className='w-full' key={line}>
            {line}
        </span>
    ));
};

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

const Schedules = async () => {
    const spreadsheetId = '1rvXM1zZvuiQ97rxrtq-vlCvcToEwMcNjhUPKjE3YjiM';
    const fields = 'sheets.data.rowData.values.formattedValue';
    const apiKey = 'AIzaSyDtV7r8s4HwKQDetTeS13lcRtVw2VE5tqg';
    const bound = 'Sheet1!A1:F30';
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
        <div className='w-full max-w-[800px] mx-auto my-4'>
            <Heading type='page'>학사 일정</Heading>
            <ul className='mx-auto flex flex-col gap-[1px] bg-slate-300 border border-gray-400'>
                {rows.map(
                    (
                        rowData: { values: { formattedValue?: string }[] },
                        idx: number
                    ) => {
                        const row = rowData.values;
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
                                {row[1] && (
                                    <Cell className='col-span-2' id='date'>
                                        {multiLineText(row[1].formattedValue)}
                                    </Cell>
                                )}
                                {row[2] && (
                                    <Cell
                                        className='col-span-3'
                                        id='event-activity'
                                    >
                                        {multiLineText(row[2].formattedValue)}
                                    </Cell>
                                )}
                                {row[3] && (
                                    <Cell
                                        className='col-span-4'
                                        id='culture-class'
                                    >
                                        {multiLineText(row[3].formattedValue)}
                                    </Cell>
                                )}
                                {row[4] && (
                                    <Cell className='col-span-1' id='lunch'>
                                        {multiLineText(row[4].formattedValue)}
                                    </Cell>
                                )}
                                {row[5] && (
                                    <Cell className='col-span-2' id='pta'>
                                        {multiLineText(row[5].formattedValue)}
                                    </Cell>
                                )}
                            </li>
                        );
                    }
                )}
            </ul>
        </div>
    );
};

export default Schedules;
