'use client';

import React from 'react';
import SignIn from './SignIn';
import Profile from './Profile';
import { useAuth } from '../SessionContext';

const ProfilePage = () => {
    const { user } = useAuth();
    console.log('user:', user);
    return user?.token ? <Profile user={user} /> : <SignIn />;
};

export default ProfilePage;
