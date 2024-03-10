'use server';

import { getUserInfo } from '@/lib/auth/server/getUserInfo';
import React from 'react';
import SignIn from './SignIn';
import Profile from './Profile';

const ProfilePage = async ({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams: { token: string | string | undefined };
}) => {
    const { token } = searchParams;
    const { customer_email } = await getUserInfo(token);
    return customer_email ? <Profile /> : <SignIn />;
};

export default ProfilePage;
