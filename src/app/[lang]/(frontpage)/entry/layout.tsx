import type { Metadata } from 'next';
import Footer from '@/widgets/Footer';
import { Languages } from '@/lib/langs/types';

export const metadata: Metadata = {
	title: 'San Antonio Korean School Homepage',
	description: 'San Antonio Korean School Official Homepage',
};
export default async function EntryLayout({
	params: { lang },
	children,
}: Readonly<{
	params: {
		lang: Languages;
	};
	children: React.ReactNode;
}>) {
	return (
		<div className='group/entry flex flex-col w-min-h-screen bg-gray-100 items-start relative'>
			{children}
			<Footer lang={lang} />
		</div>
	);
}
