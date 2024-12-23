import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';
import { Languages } from '@/lib/langs/types';
import type { Metadata, ResolvingMetadata } from 'next';
import { getEntryImages } from '@/lib/google-sheets/entryImages';
import { defaultMetaData } from '@/app/defaultMetaData';
import { ContentLoader } from '@/providers/ContentLoader';
import { LangProvider } from '@/providers';

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
	let initData = {};
	try {
		let res: Response | null = null;
		// console.warn('urlToApproach', process.env.VERCEL_URL);
		// const urlToApproach = stripUrl(process.env.VERCEL_URL);
		res = await fetch(`${process.env.API_BASE_URL ?? ''}/api/content/${langCode}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		try {
			initData = res ? ((await res.json()) as Record<string, any>) : {};
		} catch (e) {
			console.error('error while parsing response json', e);
		}
	} catch (e) {
		console.error('error while loading content', e);
	}
	return (
		<div className='flex flex-col w-full min-h-screen bg-gray-100 items-start relative'>
			<ContentLoader initContent={initData} />
			<LangProvider language={langCode}>
				<Header lang={lang} />
				<main className='flex-1 w-full'>{children}</main>
				<Footer lang={lang} />
			</LangProvider>
		</div>
	);
}
