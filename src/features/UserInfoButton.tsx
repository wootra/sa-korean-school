'use client';

import React from 'react';
import { LoginButton, ProfileButton } from './UserInfoEntryButtons';
import { useLang } from '@/lib/LangContext';
import { useSession } from 'next-auth/react';
const UserInfoButton = () => {
    const { status } = useSession();
    const { language } = useLang();
    return status === 'authenticated' ? (
        <ProfileButton lang={language} />
    ) : (
        <LoginButton lang={language} />
    );
};
export default UserInfoButton;
