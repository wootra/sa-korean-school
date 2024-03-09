import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import './globals.css';
import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';
// import './index.css';
// import './font.css';
import { Suspense } from 'react';
import ServerSession from './ServerSession';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'San Antonio Korean School Homepage',
    description: 'San Antonio Korean School Official Homepage',
};
export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            {/* <head>
                <Script
                    async
                    defer
                    crossOrigin='anonymous'
                    src='https://connect.facebook.net/en_US/sdk.js'
                ></script>
            </head> */}
            <body className={inter.className}>
                <div id='fb-root'></div>

                <div className='grid min-h-screen bg-gray-100 items-start'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <ServerSession>
                            <Header />
                            {children}
                            <Footer />
                        </ServerSession>
                    </Suspense>
                </div>
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
