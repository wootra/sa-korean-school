import { Inter } from 'next/font/google';
import Script from 'next/script';
import '@/css/globals.css';
import '@/css/index.css';
import '@/css/font.css';
import { AuthProvider } from '@/lib/SessionContext';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
    title: 'San Antonio Korean School Homepage',
    description: 'San Antonio Korean School Official Homepage',
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            {/* <head>
                <style>
                    {`
                        :root {
                            box-sizing: border-box;
                        }
                        
                    `}
                </style>
            </head> */}
            <body className={inter.className}>
                <div id='fb-root'></div>
                <SessionProvider>
                    <AuthProvider>
                        <Suspense fallback={<div>loading...</div>}>
                            {children}
                        </Suspense>
                    </AuthProvider>
                </SessionProvider>
                <Script
                    async
                    defer
                    crossOrigin='anonymous'
                    src='https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v19.0&appId=420879180505137'
                    nonce='VbxLOlga'
                />
            </body>
        </html>
    );
}
