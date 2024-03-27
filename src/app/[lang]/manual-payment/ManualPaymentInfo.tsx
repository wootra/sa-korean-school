'use server';

import { Heading } from '@/entities';
import FlexCenter from '@/layouts/FlexCenter';
import { getPaymentInfo } from '@/lib/google-sheets/paymentInfo';
import { Languages } from '@/lib/langs/types';
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
                'flex flex-col p-2 items-center justify-center'
            )}
            data-id={id}
        >
            {children}
        </div>
    );
};

const ManualPaymentInfo = async ({ lang }: { lang: Languages }) => {
    const { tableGroups, headerRow } = await getPaymentInfo(lang);

    return (
        <FlexCenter className='w-full flex flex-col gap-8'>
            <Heading type='page' className='text-2xl'>
                {headerRow[0]}
            </Heading>
            {Object.keys(tableGroups).map(classGroup => (
                <div key={classGroup} className='w-full max-w-[860px]'>
                    <Heading type='page'>{classGroup}</Heading>
                    <ul className='mx-auto flex flex-col gap-[1px] bg-slate-300 border border-gray-400'>
                        <li
                            className={cn(
                                'grid grid-cols-12 hover:bg-green-100 transition-colors',
                                ' bg-gray-200'
                            )}
                        >
                            <Cell className='col-span-4' id='date'>
                                {headerRow[1]}
                            </Cell>
                            <Cell className='col-span-8' id='event-activity'>
                                {headerRow[2]}
                            </Cell>
                        </li>

                        {tableGroups[classGroup].map((row, idx: number) => {
                            return (
                                <li
                                    className={cn(
                                        'grid grid-cols-12 hover:bg-green-100 transition-colors',

                                        'bg-white'
                                    )}
                                    key={'row-' + idx}
                                >
                                    <Cell className='col-span-4' id='date'>
                                        {row[1]}
                                    </Cell>
                                    <Cell
                                        className='col-span-8'
                                        id='event-activity'
                                    >
                                        {row[2] || 'TBD'}
                                    </Cell>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </FlexCenter>
    );
};

export default ManualPaymentInfo;
