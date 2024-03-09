'use client';

import React, {
    MutableRefObject,
    PropsWithChildren,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { User } from '@/lib/auth/types';
import {
    logoutFacebook,
    initFacebook,
    loginFacebook,
    checkFacebookLoginStatus,
    initUserInfo,
} from '@/lib/auth';

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
        // (function (d, s, id) {
        //     let js: any,
        //         fjs: any = d.getElementsByTagName(s)[0];
        //     if (d.getElementById(id)) {
        //         return;
        //     }
        //     js = d.createElement(s);
        //     js.id = id;
        //     js.src = 'https://connect.facebook.net/en_US/sdk.js';
        //     fjs.parentNode.insertBefore(js, fjs);
        // })(document, 'script', 'facebook-jssdk');

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
        // win.fbAsyncInit();
    }, []);
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}

            {/* <script
                    async
                    defer
                    crossOrigin='anonymous'
                    src='https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v19.0&appId=420879180505137'
                    nonce='dZoXc98P'
                ></script> */}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
