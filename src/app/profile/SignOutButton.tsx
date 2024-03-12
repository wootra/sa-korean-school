'use client';

import { useAuth } from '@/lib/SessionContext';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

import React, { useCallback } from 'react';

export default function SignOutButton() {
    const { logout } = useAuth();
    const signOut = useCallback(() => {
        logout();
        redirect('/profile');
    }, [logout]);
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
