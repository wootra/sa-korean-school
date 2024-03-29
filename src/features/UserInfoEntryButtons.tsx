import Image from 'next/image';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import React, { useRef } from 'react';
import notLoginImage from '@/assets/images/img_profile_24_outline.svg';
import { Languages } from '@/lib/langs/types';
export const LoginButton = ({ lang }: { lang: Languages }) => {
    return (
        <Link
            href={`/${lang}/profile`}
            className='p-0 w-6 h-auto relative'
            aria-label='login'
        >
            <Image
                src={notLoginImage}
                alt='facebook login'
                width='24'
                height='24'
                className='bg-white rounded-full'
            />

            <div className='absolute w-full h-[10px] flex justify-center items-center left-0 top-[100%] z-50'>
                <div className='text-center text-nowrap font-mono p-[2px] bg-blue-800/70 text-white text-[5px]'>
                    LOG IN
                </div>
            </div>
        </Link>
    );
};
export const ProfileButton = ({ lang }: { lang: Languages }) => {
    const ref = useRef(Math.floor(Math.random() * 1000));
    const onClick = () => {
        signOut({
            callbackUrl: '/entry',
        });
    };
    return (
        <Link
            onClick={onClick}
            href={`/${lang}/profile`}
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
