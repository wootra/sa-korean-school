import type { Metadata } from 'next';
import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';

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
            <Header />
            <main className='flex-1 w-full'>{children}</main>
            <Footer />
        </div>
    );
}
