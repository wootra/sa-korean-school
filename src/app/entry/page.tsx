import EntryMainContent from './EntryMainContent';
import HeraderWrapper from '@/app/entry/HeaderWrapper';

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
