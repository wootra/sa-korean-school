'use client';

import { useAuth } from '@/app/SessionContext';

import React from 'react';
import { LoginButton, ProfileButton } from './UserInfoEntryButtons';

const UserInfoButton = () => {
    const { user } = useAuth();
    const isLoggedIn = !!user.token;
    return !isLoggedIn ? <LoginButton /> : <ProfileButton token={user.token} />;
};
export default UserInfoButton;
