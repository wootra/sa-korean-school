import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import './globals.css';
import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';
import './index.css';
import './font.css';
import { AuthProvider } from './SessionContext';

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
            <body className={inter.className}>
                <div id='fb-root'></div>

                <div className='flex flex-col w-full min-h-screen bg-gray-100 items-start relative'>
                    <AuthProvider>
                        <Header />
                        <main className='flex-1 w-full'>{children}</main>
                        <Footer />
                    </AuthProvider>
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
