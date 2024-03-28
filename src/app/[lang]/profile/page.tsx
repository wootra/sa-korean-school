'use client';

import React from 'react';
import SignIn from './SignIn';
import Profile from './Profile';
import { useSession } from 'next-auth/react';

const ProfilePage = () => {
    const { data } = useSession();
    const { user } = data ?? {};
    return user ? <Profile user={user} /> : <SignIn />;
};

export default ProfilePage;
