import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';
import { LangProvider } from '@/lib/LangContext';
import { Languages } from '@/lib/langs/types';
import type { Metadata, ResolvingMetadata } from 'next';
import { getEntryImages } from '@/lib/google-sheets/entryImages';
import { defaultMetaData } from '../defaultMetaData';
// import { SessionProvider } from 'next-auth/react';

type Props = {
	params: { lang: string };
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const lang = params.lang as Languages;

	// fetch data
	// const product = await fetch(`https://.../${id}`).then((res) => res.json())

	// optionally access and extend (rather than replace) parent metadata
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

export default function RootLayout({
	params: { lang },
	children,
}: Readonly<{
	params: {
		lang: Languages;
	};
	children: React.ReactNode;
}>) {
	const langCode = (['en', 'kr'] as Languages[]).includes(lang as Languages)
		? (lang as Languages)
		: 'en';
	return (
		<LangProvider language={langCode}>
			<div className='flex flex-col w-full min-h-screen bg-gray-100 items-start relative'>
				<Header lang={langCode} />
				<main className='flex-1 w-full'>{children}</main>
				<Footer lang={lang} />
			</div>
		</LangProvider>
	);
}
