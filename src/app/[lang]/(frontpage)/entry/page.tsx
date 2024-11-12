import EntryMainContent from './EntryMainContent';
import HeraderWrapper from '@/app/[lang]/(frontpage)/entry/HeaderWrapper';

export default async function Home() {
	return (
		<>
			<HeraderWrapper />
			<main className='flex-1 w-full relative'>
				<EntryMainContent />
			</main>
		</>
	);
}
