'use client';

import React from 'react';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

const GoogleSignIn = () => {
    const onClick = () => {
        signIn('google');
    };
    return (
        <div>
            <button onClick={onClick}>
                <FcGoogle className='w-8 h-8' />
            </button>
        </div>
    );
};

export default GoogleSignIn;
