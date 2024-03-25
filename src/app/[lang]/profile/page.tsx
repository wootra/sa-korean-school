'use client';

import React from 'react';
import SignIn from './SignIn';
import Profile from './Profile';
import { useAuth } from '@/lib/SessionContext';

const ProfilePage = () => {
    const { user } = useAuth();
    return user?.token ? <Profile user={user} /> : <SignIn />;
};

export default ProfilePage;