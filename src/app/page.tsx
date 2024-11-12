import { getEntryImages } from '@/lib/google-sheets/entryImages';
import { Languages } from '@/lib/langs/types';
import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';
import { defaultMetaData } from './defaultMetaData';

type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
	// read route params
	const lang = searchParams.lang as Languages;

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

export default async function Home() {
	redirect('/en/entry');
}
