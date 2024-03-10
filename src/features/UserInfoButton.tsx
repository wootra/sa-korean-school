'use client';

import { useAuth } from '@/app/SessionContext';
import Image from 'next/image';
import Link from 'next/link';

import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import facebookLogo from '@/assets/images/facebook-logo.svg';
const LoginButton = () => {
    const { login } = useAuth();
    return (
        <Link
            // href={loginUrl}
            href='#'
            onClick={e => {
                e.preventDefault();
                login();
            }}
            className='p-0 relative'
        >
            <Image
                src={facebookLogo}
                alt='facebook login'
                width='20'
                height='20'
            />
            <div className='absolute w-full h-[10px] flex justify-center items-center font-mono bg-blue-800/70 text-white text-center left-0 top-[calc(100%+4px)] text-[5px] z-50'>
                LOG IN
            </div>
        </Link>
    );
};
const ProfileButton = () => {
    const { logout } = useAuth();
    const ref = useRef(Math.floor(Math.random() * 1000));
    return (
        <Button
            onClick={logout}
            variant={'ghost'}
            className='w-8 h-8 p-0 relative'
            aria-label='logout'
        >
            <Image
                src={`/avatar_icons/cropped_icon_${(ref.current % 9) + 1}.png`}
                alt='profiletwentyfo'
                width='30'
                height='30'
            />
            <div className='absolute w-full h-[10px] flex justify-center items-center font-mono bg-red-800/70 text-white text-center left-0 top-[100%] text-[5px] z-50'>
                LOGGED IN
            </div>
        </Button>
    );
};
const UserInfoButton = () => {
    const { user, login, logout } = useAuth();
    const isLoggedIn = !!user.token;
    console.log('user is:', user);
    return !isLoggedIn ? <LoginButton /> : <ProfileButton />;
};
export default UserInfoButton;
