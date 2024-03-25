'use client';

import { useAuth } from '@/lib/SessionContext';

import React from 'react';
import { LoginButton, ProfileButton } from './UserInfoEntryButtons';
import { useLang } from '@/lib/LangContext';

const UserInfoButton = () => {
    const { user } = useAuth();
    const { language } = useLang();
    return user?.token ? (
        <ProfileButton token={user.token} lang={language} />
    ) : (
        <LoginButton lang={language} />
    );
};
export default UserInfoButton;
