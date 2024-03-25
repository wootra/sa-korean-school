import type { Metadata } from 'next';
import Footer from '@/widgets/Footer';
import { LangProvider } from '@/lib/LangContext';

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
        <div className='group/entry flex flex-col w-min-h-screen bg-gray-100 items-start relative'>
            <LangProvider language={undefined}>{children}</LangProvider>
            <Footer />
        </div>
    );
}
