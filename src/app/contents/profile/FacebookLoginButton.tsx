'use client';

import { useAuth } from '@/lib/SessionContext';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';
import facebookLogo from '@/assets/images/facebook-logo.svg';
import { redirect } from 'next/navigation';
export default function FacebookLoginButton() {
    const { login } = useAuth();
    return (
        <Link
            href='#'
            onClick={e => {
                e.preventDefault();
                login();
                redirect('/entry');
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
}
