import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';
import { LangProvider, ClientProvider } from '@/providers';
import { Languages } from '@/lib/langs/types';
import type { Metadata, ResolvingMetadata } from 'next';
import { getEntryImages } from '@/lib/google-sheets/entryImages';
import { defaultMetaData } from '../defaultMetaData';
import Link from 'next/link';
import SignOutButton from './profile/SignOutButton';
// import { SessionProvider } from 'next-auth/react';

type Props = {
	params: { lang: string };
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
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
			<ClientProvider>
				<div className='flex flex-col w-full min-h-screen bg-gray-100 items-start relative'>
					<Header lang={langCode} />
					<main className='flex-1 w-full h-full flex flex-row justify-center items-center'>
						<div className='w-full flex justify-center items-center'>
							<div className='min-h-screen w-full bg-gray-50 py-10'>
								<div className='container flex'>
									{/* Sidebar Menu */}
									<div className='w-64 flex-shrink-0 bg-white shadow-lg rounded-lg p-5 relative'>
										<div className='font-semibold text-lg mb-10'>
											Menu
										</div>
										<ul className='space-y-4'>
											<li>
												<Link
													href={`/${lang}/profile`}
													className='text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out'
												>
													Profile
												</Link>
											</li>
											<li>
												<Link
													href={`/${lang}/profile/users`}
													className='text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out'
												>
													Allowed Users
												</Link>
											</li>
											{/* Add more menu items here */}
										</ul>
										<div className='absolute bottom-2 left-2 right-2 h-fit'>
											<SignOutButton />
										</div>
									</div>

									{/* Content Panel */}
									<div className='flex-1 bg-white shadow-lg rounded-lg overflow-hidden ml-10'>
										{children}
									</div>
								</div>
							</div>
						</div>
					</main>
					<Footer lang={lang} />
				</div>
			</ClientProvider>
		</LangProvider>
	);
}
