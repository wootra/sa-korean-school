import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';
// import './index.css';
// import './font.css';

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
            <body className={inter.className}>
                <div className='grid min-h-screen bg-gray-100 items-start'>
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
