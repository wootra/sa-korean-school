'use client';

import { useAuth } from '@/app/SessionContext';

import React from 'react';
import { LoginButton, ProfileButton } from './UserInfoEntryButtons';

const UserInfoButton = () => {
    const { user } = useAuth();
    return user.token ? <ProfileButton token={user.token} /> : <LoginButton />;
};
export default UserInfoButton;
