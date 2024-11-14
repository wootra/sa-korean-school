// import { Inter } from 'next/font/google';

import '@/css/globals.css';
import '@/css/index.css';
import '@/css/font.css';
import { Metadata } from 'next';
import { AuthProvider, ClientProvider } from '@/providers';
import { PropsWithChildren } from 'react';
import { getSession } from '@/config/auth';
import { Languages } from '@/lib/langs/types';

// const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
	title: 'San Antonio Korean School Homepage',
	description: 'San Antonio Korean School Official Homepage',
};
export default async function RootLayout({
	params: { lang },
	children,
}: PropsWithChildren<{
	params: {
		lang: Languages;
	};
}>) {
	const session = await getSession();

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
			<body>
				<div id='fb-root'></div>

				<AuthProvider session={session}>
					<ClientProvider>{children}</ClientProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
