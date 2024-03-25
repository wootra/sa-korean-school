'use client';

import { RefObject, useRef } from 'react';
import Header from '@/widgets/Header';
import { useLang } from '@/lib/LangContext';

export default function HeraderWrapper() {
    const ref = useRef<HTMLElement>(null);
    const { language } = useLang();
    return (
        <>
            <Header fixed refToObserve={ref} lang={language} />

            <main className='flex-1 w-full relative'>
                <div
                    ref={ref as RefObject<HTMLDivElement>}
                    className='opacity-1 bg-transparent h-1 absolute top-0 inset-x-0'
                ></div>
            </main>
        </>
    );
}
