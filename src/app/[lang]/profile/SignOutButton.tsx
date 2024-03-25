'use client';

import { useAuth } from '@/lib/SessionContext';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

import React, { useCallback } from 'react';
import { useLang } from '@/lib/LangContext';

export default function SignOutButton() {
    const { logout } = useAuth();
    const { language } = useLang();
    const signOut = useCallback(() => {
        logout();
        redirect(`/${language}/profile`);
    }, [logout, language]);
    return (
        <Button
            className='w-full'
            type='button'
            variant={'destructive'}
            onClick={signOut}
        >
            Sign Out
        </Button>
    );
}
