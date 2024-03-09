'use client';

import { useAuth } from '@/app/SessionContext';
// import { useAuth } from '@/app/SessionContext';
// import { signIn, useSession } from 'next-auth/react';
// import Image from 'next/image';
// import Link from 'next/link';

// const loginUrl = `https://www.facebook.com/v19.0/dialog/oauth?client_id=${
//     process.env.FACEBOOK_APP_ID
// }&redirect_uri=${encodeURI(
//     `${process.env.NEXTAUTH_URL}/api/auth/callback/facebook`
// )}`;

const UserInfoButton = () => {
    // const { data: session, status } = useSession();
    const user = useAuth();
    console.log('user is:', user);
    return (
        <>
            <div
                className={`fb-login-button ${user?.name ? 'hidden' : ''}`}
                data-width='30'
                data-size='medium'
                data-button-type=''
                data-layout='rounded'
                data-auto-logout-link='false'
                data-use-continue-as='true'
            ></div>
            <div
                className={`fb-login-button ${user?.name ? '' : 'hidden'}`}
                data-width='30'
                data-size=''
                data-button-type=''
                data-layout=''
                data-auto-logout-link='true'
                data-use-continue-as='true'
            ></div>
        </>
    );
    // return (
    //     <Link
    //         href={loginUrl}
    //         // href='#'
    //         // onClick={e => {
    //         //     e.preventDefault();
    //         //     signIn('facebook');
    //         // }}
    //         className='rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800 p-0'
    //     >
    //         <Image
    //             src={
    //                 session?.user?.image ?? '/images/img_profile_24_outline.svg'
    //             }
    //             alt='profiletwentyfo'
    //             width='30'
    //             height='30'
    //         />
    //     </Link>
    // );
};
export default UserInfoButton;
