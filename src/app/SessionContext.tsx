'use client';

import React, { PropsWithChildren } from 'react';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

export const AuthProvider = ({
    children,
    session,
}: PropsWithChildren<{ session: Session }>) => {
    console.log('session is:', session);
    return <SessionProvider session={session}>{children}</SessionProvider>;
};
