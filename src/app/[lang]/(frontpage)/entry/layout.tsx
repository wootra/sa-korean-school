import type { Metadata } from 'next';
import Footer from '@/widgets/Footer';
import { LangProvider } from '@/providers';
import { Languages } from '@/lib/langs/types';
import { updatePeekaboo } from 'peekaboo-store/utils/update';
import { contentStore } from '@/components/store/contents';
import { PeekabooObjSourceData } from 'peekaboo-store';

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
	const langCode = (['en', 'kr'] as Languages[]).includes(lang as Languages) ? (lang as Languages) : 'en';
	// const res = await fetch(`/api/content/${langCode}`, {
	// 	method: 'GET',
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// });
	// const initData = (await res.json()) as Record<string, any>;
	// // below is updating serverside.
	// updatePeekaboo(contentStore, initData as Partial<PeekabooObjSourceData<typeof contentStore>>);

	return (
		<div className='group/entry flex flex-col w-min-h-screen bg-gray-100 items-start relative'>
			<LangProvider language={langCode} initContent={undefined}>
				{children}
				<Footer lang={undefined} />
			</LangProvider>
		</div>
	);
}
