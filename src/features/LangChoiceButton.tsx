'use client';

import { useLang } from '@/lib/LangContext';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import krFlag from './images/kr.svg';
import enFlag from './images/en.svg';
import React from 'react';

const LangChoiceButton = () => {
    const { language } = useLang();
    const { lang } = useParams() as { lang: string };
    const pathname = usePathname();
    const newPathname = pathname.replace(lang, lang === 'en' ? 'kr' : 'en');
    return (
        <Link
            href={newPathname}
            className='w-auto h-6 p-0 relative'
            aria-label='logout'
        >
            <Image
                src={language === 'kr' ? krFlag : enFlag}
                alt='profiletwentyfo'
                width='16'
                height='16'
                className='rounded-full'
            />
            <div className='absolute w-full h-[10px] flex justify-center items-center left-0 top-[100%] z-50'>
                <div className='text-center text-nowrap font-mono p-[2px] bg-red-800/70 text-white text-[5px]'>
                    {language}
                </div>
            </div>
        </Link>
    );
};

export default LangChoiceButton;
