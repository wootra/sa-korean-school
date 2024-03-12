import Image from 'next/image';
import Link from 'next/link';

import React, { useRef } from 'react';
import notLoginImage from '@/assets/images/img_profile_24_outline.svg';
export const LoginButton = () => {
    return (
        <Link
            href={`/profile`}
            className='p-0 h-6 w-auto relative'
            aria-label='login'
        >
            <Image
                src={notLoginImage}
                alt='facebook login'
                width='20'
                height='20'
            />

            <div className='absolute w-full h-[10px] flex justify-center items-center left-0 top-[100%] z-50'>
                <div className='text-center text-nowrap font-mono p-[2px] bg-blue-800/70 text-white text-[5px]'>
                    LOG IN
                </div>
            </div>
        </Link>
    );
};
export const ProfileButton = ({ token }: { token: string }) => {
    const ref = useRef(Math.floor(Math.random() * 1000));
    return (
        <Link
            href={`/profile?token=${token}`}
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