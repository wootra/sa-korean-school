import React, { MutableRefObject } from 'react';
import { User } from './types';

export const initFacebook = () => {
    const win = window as Window & typeof globalThis & any;
    win.FB.init({
        appId: '345510904508481',
        xfbml: true,
        version: 'v19.0',
    });
};

export const getMeInfoFromFacebook = (cb: (res: any) => void) => {
    const win = window as Window & typeof globalThis & any;
    win.FB.api('/me', { fields: 'name, email' }, (res: any) => {
        cb(res);
    });
};

export const initUserInfo = (error = ''): User => ({
    name: '',
    email: '',
    error: error,
    uid: '',
    token: '',
});

export const loginFacebook = (
    connectedRef: MutableRefObject<boolean>,
    setUser: React.Dispatch<React.SetStateAction<User>>
) => {
    const win = window as Window & typeof globalThis & any;
    win.FB.login((response: any) => {
        if (response.authResponse) {
            connectedRef.current = true;

            getMeInfoFromFacebook(res => {
                setUser({
                    name: res.name,
                    email: res.email,
                    error: '',
                    uid: res.id,
                    token: response.authResponse.accessToken,
                });
            });
        } else {
            connectedRef.current = false;
            setUser({
                name: '',
                email: '',
                error: 'User cancelled login or did not fully authorize.',
                uid: '',
                token: '',
            });
        }
    });
};

export const logoutFacebook = (
    connectedRef: MutableRefObject<boolean>,
    setUser: React.Dispatch<React.SetStateAction<User>>
) => {
    const win = window as Window & typeof globalThis & any;
    win.FB.logout((res: any) => {
        connectedRef.current = false;
        setUser({
            name: '',
            email: '',
            error: '',
            uid: '',
            token: '',
        });
    });
};

export const checkFacebookLoginStatus = (
    connectedRef: MutableRefObject<boolean>,
    setUser: React.Dispatch<React.SetStateAction<User>>
) => {
    const win = window as Window & typeof globalThis & any;
    win.FB.getLoginStatus((response: any) => {
        if (response.status === 'connected') {
            if (!connectedRef.current) {
                connectedRef.current = true;
                getMeInfoFromFacebook(res => {
                    setUser({
                        name: res.name,
                        email: res.email,
                        error: '',
                        uid: res.id,
                        token: response.authResponse.accessToken,
                    });
                });
            }
        } else if (response.status === 'not_authorized') {
            connectedRef.current = false;
            setUser({
                name: '',
                email: '',
                error: 'not_authorized',
                uid: '',
                token: '',
            });
            // the user is logged in to Facebook,
            // but has not authenticated your app
        } else {
            connectedRef.current = false;
            setUser({
                name: '',
                email: '',
                error: 'not logged in',
                uid: '',
                token: '',
            });
            // the user isn't logged in to Facebook.
        }
    });
};
