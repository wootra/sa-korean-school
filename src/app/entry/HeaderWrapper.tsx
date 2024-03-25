'use client';

import { RefObject, useRef } from 'react';
import Header from '@/widgets/Header';

export default function HeraderWrapper() {
    const ref = useRef<HTMLElement>(null);
    return (
        <>
            <Header fixed refToObserve={ref} lang='en' />

            <main className='flex-1 w-full relative'>
                <div
                    ref={ref as RefObject<HTMLDivElement>}
                    className='opacity-1 bg-transparent h-1 absolute top-0 inset-x-0'
                ></div>
            </main>
        </>
    );
}
