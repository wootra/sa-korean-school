'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import { useEffect } from 'react';
export default function AutoRedirectWhenLoggedIn({ to }: { to: string }) {
    const { data } = useSession();
    const { user } = data ?? {};
    useEffect(() => {
        if (user?.email) redirect(to);
    }, [user?.email, to]);
    return null;
}
