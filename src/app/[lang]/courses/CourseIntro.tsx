'use server';

import { Heading } from '@/entities';
import { multiLineText } from '@/lib/jsxUtils';
import { Languages } from '@/lib/langs/types';
import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';
import { courseTitles } from './consts';
import { getCourseIntro } from '@/lib/google-sheets/courseIntro';

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
const CourseIntro = async ({ lang }: { lang: Languages }) => {
    const rows = await getCourseIntro(lang);
    const heading = (courseTitles[lang] ?? courseTitles.en).introduction;
    return (
        <>
            <Heading type='page'>{heading}</Heading>
            <ul className='mx-auto flex flex-col gap-[1px] bg-slate-300 border border-gray-400'>
                {rows.map((cols: string[], idx: number) => {
                    const color = cols[2] ?? 'black';
                    return (
                        <li
                            className={cn(
                                'grid grid-cols-12 hover:bg-green-100 transition-colors',
                                idx === 0
                                    ? ' bg-gray-200'
                                    : !cols[0]
                                    ? 'bg-slate-300'
                                    : 'bg-white'
                            )}
                            key={'row-' + idx}
                        >
                            {cols[0] && (
                                <Cell
                                    className='col-span-3 flex flex-col relative'
                                    id='class-name'
                                >
                                    {' '}
                                    <div
                                        className='absolute left-0 inset-y-0 w-1'
                                        style={{ backgroundColor: color }}
                                    ></div>
                                    {multiLineText(cols[0])}
                                </Cell>
                            )}
                            {cols[1] && (
                                <Cell
                                    className='col-span-9 text-left'
                                    id='description'
                                >
                                    {multiLineText(cols[1])}
                                </Cell>
                            )}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default CourseIntro;
