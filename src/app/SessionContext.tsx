'use client';

import React, {
    MutableRefObject,
    PropsWithChildren,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
type User = {
    name: string;
    email: string;
    error: string;
    uid: string;
    token: '';
};
const AuthContext = React.createContext<User>({
    name: '',
    email: '',
    error: '',
    uid: '',
    token: '',
});
const init = () => {
    const win = window as Window & typeof globalThis & any;
    win.FB.init({
        appId: '345510904508481',
        xfbml: true,
        version: 'v19.0',
    });
};
const getMeInfo = (cb: (res: any) => void) => {
    const win = window as Window & typeof globalThis & any;
    win.FB.api('/me', { fields: 'name, email' }, (res: any) => {
        cb(res);
    });
};
const login = (
    connectedRef: MutableRefObject<boolean>,
    setUser: React.Dispatch<React.SetStateAction<User>>
) => {
    const win = window as Window & typeof globalThis & any;
    win.FB.login((response: any) => {
        if (response.authResponse) {
            connectedRef.current = true;
            console.log(
                'Welcome! login Fetching your information.... ',
                response
            );
            getMeInfo(res => {
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

const checkLoginStatus = (
    connectedRef: MutableRefObject<boolean>,
    setUser: React.Dispatch<React.SetStateAction<User>>
) => {
    const win = window as Window & typeof globalThis & any;
    win.FB.getLoginStatus((response: any) => {
        console.log('checkLoginStatus', response);
        if (response.status === 'connected') {
            if (!connectedRef.current) {
                connectedRef.current = true;
                getMeInfo(res => {
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
export const AuthProvider = ({
    children,
    session,
}: PropsWithChildren<{ session: Session }>) => {
    const [user, setUser] = useState<User>({
        name: '',
        email: '',
        error: '',
        uid: '',
        token: '',
    });
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
            init();
            login(connectedRef, setUser);
            checkLoginStatus(connectedRef, setUser);
        };
        initedRef.current = true;
        // win.fbAsyncInit();
    }, []);
    console.log('session is:', session);
    return (
        <SessionProvider session={session}>
            <AuthContext.Provider value={user}>
                {children}

                {/* <script
                    async
                    defer
                    crossOrigin='anonymous'
                    src='https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v19.0&appId=420879180505137'
                    nonce='dZoXc98P'
                ></script> */}
            </AuthContext.Provider>
        </SessionProvider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
