'use client';

import { useAuth } from '@/app/SessionContext';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';
import facebookLogo from '@/assets/images/facebook-logo.svg';
export const LoginButton = () => {
    const { login } = useAuth();
    return (
        <Link
            href='#'
            onClick={e => {
                e.preventDefault();
                login();
            }}
            className='p-0 h-6 w-auto relative'
        >
            <Image
                src={facebookLogo}
                alt='facebook login'
                width='20'
                height='20'
            />
        </Link>
    );
};
