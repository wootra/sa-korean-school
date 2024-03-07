'use client';

import React, { PropsWithChildren, createContext } from 'react';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

export const AuthContext = createContext<Session>({} as Session);

export const AuthProvider = ({
    children,
    session,
}: PropsWithChildren<{ session: Session }>) => {
    console.log('session is:', session);
    return (
        <AuthContext.Provider value={session ?? ({} as Session)}>
            <SessionProvider>{children}</SessionProvider>
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return React.useContext(AuthContext);
};
