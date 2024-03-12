'use client';

import React, {
    PropsWithChildren,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { User } from '@/lib/auth/client/types';
import {
    logoutFacebook,
    initFacebook,
    loginFacebook,
    checkFacebookLoginStatus,
    initUserInfo,
} from '@/lib/auth/client';

const AuthContext = React.createContext<{
    user: User;
    login: () => void;
    logout: () => void;
}>({ user: initUserInfo(), login: () => {}, logout: () => {} });

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<User>(initUserInfo());
    const logout = useCallback(() => {
        logoutFacebook(connectedRef, setUser);
    }, []);
    const login = useCallback(() => {
        loginFacebook(connectedRef, setUser);
    }, []);
    const connectedRef = useRef<boolean>(false);
    const initedRef = useRef<boolean>(false);
    useEffect(() => {
        const win = window as Window & typeof globalThis & any;
        if (initedRef.current) {
            return;
        }
        win.fbAsyncInit = async function () {
            initFacebook();
            // loginFacebook(connectedRef, setUser);
            checkFacebookLoginStatus(connectedRef, setUser);
        };
        initedRef.current = true;
    }, []);
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
