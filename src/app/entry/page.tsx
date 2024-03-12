'use client';

import { RefObject, useRef } from 'react';
import Header from '@/widgets/Header';
import EntryMainContent from './EntryMainContent';
// export const dynamic = 'force-dynamic';

export default function Home() {
    const ref = useRef<HTMLElement>(null);
    return (
        <>
            <Header fixed refToObserve={ref} />

            <main className='flex-1 w-full relative'>
                <div
                    ref={ref as RefObject<HTMLDivElement>}
                    className='opacity-1 bg-transparent h-1 absolute top-0 inset-x-0'
                ></div>
                <EntryMainContent />
            </main>
        </>
    );
}
