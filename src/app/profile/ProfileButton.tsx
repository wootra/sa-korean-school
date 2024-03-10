'use client';

import { useAuth } from '@/app/SessionContext';
import Image from 'next/image';
import Link from 'next/link';

import React, { useRef } from 'react';

export const ProfileButton = () => {
    const { logout } = useAuth();
    const ref = useRef(Math.floor(Math.random() * 1000));
    return (
        <Link
            onClick={logout}
            href='#'
            className='w-auto h-6 p-0 relative'
            aria-label='logout'
        >
            <Image
                src={`/avatar_icons/cropped_icon_${(ref.current % 9) + 1}.png`}
                alt='profiletwentyfo'
                width='30'
                height='30'
            />
            <div className='absolute w-full h-[10px] flex justify-center items-center left-0 top-[100%] z-50'>
                <div className='text-center text-nowrap font-mono p-[2px] bg-red-800/70 text-white text-[5px]'>
                    LOGGED IN
                </div>
            </div>
        </Link>
    );
};
