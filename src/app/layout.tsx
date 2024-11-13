import { Inter } from 'next/font/google';

import '@/css/globals.css';
import '@/css/index.css';
import '@/css/font.css';
import { Metadata } from 'next';
import { AuthProvider, ClientProvider, LangProvider } from '@/providers';
import { PropsWithChildren } from 'react';
import { getSession } from '@/config/auth';
import { Languages } from '@/lib/langs/types';
import { stripUrl } from '@/lib/utils';
import { contentStore } from '@/components/store/contents';
import { updatePeekaboo } from 'peekaboo-store/utils/update';
import { PeekabooObjSourceData } from 'peekaboo-store';

const inter = Inter({ subsets: ['latin'] });
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

	const langCode = (['en', 'kr'] as Languages[]).includes(lang as Languages) ? (lang as Languages) : 'en';
	const res = await fetch(`${stripUrl(process.env.VERCEL_URL)}/api/content/${langCode}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const initData = (await res.json()) as Record<string, any>;
	// below is updating serverside.
	updatePeekaboo(contentStore, initData as Partial<PeekabooObjSourceData<typeof contentStore>>);

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
				<AuthProvider session={session}>
					<LangProvider language={langCode} initContent={undefined}>
						<ClientProvider>{children}</ClientProvider>
					</LangProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
