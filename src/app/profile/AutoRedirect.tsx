'use client';

import { useAuth } from '@/lib/SessionContext';
import { redirect } from 'next/navigation';

import { useEffect } from 'react';
export default function AutoRedirectWhenLoggedIn({ to }: { to: string }) {
    const { user } = useAuth();
    useEffect(() => {
        if (user.email) redirect(to);
    }, [user.email, to]);
    return null;
}
