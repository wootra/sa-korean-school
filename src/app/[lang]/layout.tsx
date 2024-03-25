import type { Metadata } from 'next';
import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';
import { LangProvider } from '@/lib/LangContext';
import { Languages } from '@/lib/langs/types';

export const metadata: Metadata = {
    title: 'San Antonio Korean School Homepage',
    description: 'San Antonio Korean School Official Homepage',
};
export default function RootLayout({
    params: { lang },
    children,
}: Readonly<{
    params: {
        lang: string;
    };
    children: React.ReactNode;
}>) {
    const langCode = (['en', 'kr'] as Languages[]).includes(lang as Languages)
        ? (lang as Languages)
        : 'en';
    return (
        <LangProvider language={langCode}>
            <div className='flex flex-col w-full min-h-screen bg-gray-100 items-start relative'>
                <Header lang={langCode} />
                <main className='flex-1 w-full'>{children}</main>
                <Footer />
            </div>
        </LangProvider>
    );
}
