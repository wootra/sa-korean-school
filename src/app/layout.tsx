import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';
// import './index.css';
// import './font.css';
import { AuthProvider } from '@/app/SessionContext';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';

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
    const session = await getServerSession(authOptions);
    return (
        <html lang='en'>
            <body className={inter.className}>
                <div className='grid min-h-screen bg-gray-100 items-start'>
                    <AuthProvider session={session ?? ({} as Session)}>
                        <Header />
                        {children}
                        <Footer />
                    </AuthProvider>
                </div>
            </body>
        </html>
    );
}
