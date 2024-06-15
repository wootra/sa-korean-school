import { Inter } from 'next/font/google';

import '@/css/globals.css';
import '@/css/index.css';
import '@/css/font.css';
import { Metadata } from 'next';
import { AuthProvider } from '@/providers';
import { PropsWithChildren } from 'react';
import { auth } from '@/config/auth';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
	title: 'San Antonio Korean School Homepage',
	description: 'San Antonio Korean School Official Homepage',
};
export default async function RootLayout({ children }: PropsWithChildren) {
	const session = await auth();
	console.log('session:', session);
	return (
		<html lang='en'>
			<head>
				<style>
					{`
                        html *,body * {
                            box-sizing: border-box;
                        }
                        body {
                            overflow-x: hidden;
                        }
                        
                    `}
				</style>
			</head>
			<body className={inter.className}>
				<div id='fb-root'></div>
				<AuthProvider session={session}>{children}</AuthProvider>
			</body>
		</html>
	);
}
