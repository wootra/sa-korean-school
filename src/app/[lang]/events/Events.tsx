'use server';

import { Heading } from '@/entities';
import { getEventSchedule } from '@/lib/google-sheets/eventSchedule';
import { Languages } from '@/lib/langs/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
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

const Events = async ({ lang }: { lang: Languages }) => {
    const { tableGroups, headerRow } = await getEventSchedule(lang);
    return (
        <div className='w-full max-w-[800px] mx-auto my-4 flex flex-col gap-8'>
            {Object.keys(tableGroups).map(classGroup => (
                <div key={classGroup}>
                    <Heading type='page'>{classGroup}</Heading>
                    <ul className='mx-auto flex flex-col gap-[1px] bg-slate-300 border border-gray-400'>
                        <li
                            className={cn(
                                'flex flex-col justify-start items-start sm:grid sm:grid-cols-12 hover:bg-green-100 transition-colors text-sm',
                                ' bg-gray-200'
                            )}
                        >
                            <Cell className='col-span-4' id='name'>
                                {headerRow[1]}
                            </Cell>
                            <Cell className='col-span-2' id='date'>
                                {headerRow[2]}
                            </Cell>
                            <Cell className='col-span-3' id='location'>
                                {headerRow[3]}
                            </Cell>
                            <Cell className='col-span-3' id='parking-info'>
                                {headerRow[5]}
                            </Cell>
                        </li>

                        {tableGroups[classGroup].map((row, idx: number) => {
                            return (
                                <li
                                    className={cn(
                                        'flex flex-col justify-start items-start sm:grid sm:grid-cols-12 hover:bg-green-100 transition-colors text-sm',

                                        'bg-white'
                                    )}
                                    key={'row-' + idx}
                                >
                                    <Cell className='col-span-4' id='name'>
                                        {row[1]}
                                    </Cell>
                                    <Cell className='col-span-2' id='date'>
                                        {row[2] ?? 'TBD'}
                                    </Cell>
                                    <Cell
                                        className='col-span-3'
                                        id='location-and-link'
                                    >
                                        {row[3] && row[4] ? (
                                            <Link
                                                href={row[4]}
                                                aria-label={`location for ${row[1]}`}
                                                target='_blank'
                                                className='underline underline-offset-2 text-blue-700'
                                            >
                                                {row[3]}
                                            </Link>
                                        ) : (
                                            row[3] ?? 'TBD'
                                        )}
                                    </Cell>
                                    <Cell
                                        className='col-span-3'
                                        id='parking-info'
                                    >
                                        {row[5] ? (
                                            <Image
                                                src={row[5]}
                                                width='320'
                                                // height='auto'
                                                height='460'
                                                style={{
                                                    aspectRatio: 'auto',
                                                }}
                                                alt='parking info'
                                                className='sm:hover:scale-[4] origin-right'
                                            />
                                        ) : (
                                            'TBD'
                                        )}
                                    </Cell>
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
