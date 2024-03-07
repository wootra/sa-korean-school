'use client';

// import { useAuth } from '@/app/SessionContext';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const UserInfoButton = () => {
    const { data: session, status } = useSession();
    console.log('status is:', status, 'session is', session);
    return (
        <Link
            href='/api/auth/signin'
            onClick={e => {
                e.preventDefault();
                signIn();
            }}
            className='rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800 p-0'
        >
            <Image
                src={
                    session?.user?.image ?? '/images/img_profile_24_outline.svg'
                }
                alt='profiletwentyfo'
                width='30'
                height='30'
            />
        </Link>
    );
};
export default UserInfoButton;
