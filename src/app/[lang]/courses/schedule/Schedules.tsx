'use server';

import { Heading } from '@/entities';
import { getCourseSchedule } from '@/lib/google-sheets/courseSchedule';
import { multiLineText } from '@/lib/jsxUtils';
import { Languages } from '@/lib/langs/types';
import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';
import { courseTitles } from '../consts';

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
                'p-2 flex flex-row gap-2 md:items-center md:justify-center text-xs'
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

const Schedules = async ({ lang }: { lang: Languages }) => {
    const allRows = await getCourseSchedule(lang);
    const headerRow = allRows[0];
    const rows = allRows.slice(1);
    const heading = (courseTitles[lang] ?? courseTitles.en).schedule;
    return (
        <>
            <Heading type='page'>{heading}</Heading>
            <ul className='mx-auto flex flex-col gap-[1px] bg-slate-300 border border-gray-400'>
                <li
                    className={cn(
                        'hidden justify-start items-start gap-0 md:grid grid-cols-12 hover:bg-green-100 transition-colors',
                        ' bg-gray-200 font-extrabold'
                    )}
                >
                    <Cell className='col-span-2' id='date'>
                        {headerRow[1]}
                    </Cell>
                    <Cell className='col-span-3' id='event-activity'>
                        {headerRow[2]}
                    </Cell>
                    <Cell className='col-span-4' id='culture-class'>
                        {headerRow[3]}
                    </Cell>
                    <Cell className='col-span-1' id='lunch'>
                        {headerRow[4]}
                    </Cell>
                    <Cell className='col-span-2' id='pta'>
                        {headerRow[5]}
                    </Cell>
                </li>
                {rows.map((cols, idx: number) => {
                    return (
                        <li
                            className={cn(
                                'flex flex-col justify-start items-start gap-0 md:grid grid-cols-12 hover:bg-green-100 transition-colors',
                                !cols[0] ? 'bg-slate-300' : 'bg-white'
                            )}
                            key={'row-' + idx}
                        >
                            <Cell className='col-span-2' id='date' title='Date'>
                                {multiLineText(cols[1])}
                            </Cell>
                            <Cell
                                className='col-span-3'
                                id='event-activity'
                                title='Event & Activities'
                            >
                                {multiLineText(cols[2], true)}
                            </Cell>
                            <Cell
                                className='col-span-4'
                                id='culture-class'
                                title='Culture or History Class'
                            >
                                {multiLineText(cols[3], true)}
                            </Cell>
                            <Cell
                                className='col-span-1'
                                id='lunch'
                                title='Lunch'
                            >
                                {multiLineText(cols[4], true)}
                            </Cell>
                            <Cell className='col-span-2' id='pta' title='PTA'>
                                {multiLineText(cols[5], true)}
                            </Cell>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Schedules;
