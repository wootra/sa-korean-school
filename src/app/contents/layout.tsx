import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';
import { AuthProvider } from '@/lib/SessionContext';
import { Suspense } from 'react';

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
        <div className='flex flex-col w-full min-h-screen bg-gray-100 items-start relative'>
            <AuthProvider>
                <Header />
                <main className='flex-1 w-full'>
                    <Suspense fallback={<div>loading...</div>}>
                        {children}
                    </Suspense>
                </main>
                <Footer />
            </AuthProvider>
        </div>
    );
}
