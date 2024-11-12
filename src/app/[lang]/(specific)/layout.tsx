import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';
import { LangProvider, ClientProvider } from '@/providers';
import { Languages } from '@/lib/langs/types';
import type { Metadata, ResolvingMetadata } from 'next';
import { getEntryImages } from '@/lib/google-sheets/entryImages';
import { defaultMetaData } from '@/app/defaultMetaData';
import { updatePeekaboo } from 'peekaboo-store/utils/update';
import { contentStore } from '@/components/store/contents';
import { PeekabooObjSourceData } from 'peekaboo-store';

type Props = {
	params: { lang: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
	const lang = params.lang as Languages;

	const previousImages = (await parent).openGraph?.images || [];
	const imageGroups = await getEntryImages();
	const heroImage = imageGroups['main-hero']?.[0]?.url ?? '';
	const meta = defaultMetaData[lang] ?? defaultMetaData.en;
	return {
		title: meta.title,
		openGraph: {
			images: [heroImage, ...previousImages],
		},
		description: meta.description,
	};
}

export default async function LanguageLayout({
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
		<LangProvider language={langCode} initContent={undefined}>
			<ClientProvider>
				<div className='flex flex-col w-full min-h-screen bg-gray-100 items-start relative'>
					<Header lang={langCode} />
					<main className='flex-1 w-full'>{children}</main>
					<Footer lang={lang} />
				</div>
			</ClientProvider>
		</LangProvider>
	);
}
