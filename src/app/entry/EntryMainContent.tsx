import Image from 'next/image';
import TopMain from '@/layouts/TopMain';
import { Heading } from '@/entities';
import { multiLineText } from '@/lib/jsxUtils';
import ScrollingBar from './ScrollingBar';
import samulnori from '@/assets/images/samulnoli.jpg';

export default function EntryMainContent() {
    return (
        <>
            <Image
                sizes='(min-width: 768px) 100vw, 100vw'
                src={samulnori}
                alt='people in blue and white costume dancing on street during daytime'
                style={{ aspectRatio: '4683 / 3477' }}
                className='max-h-[100vh] object-cover'
            />
            <TopMain>
                <div className='container flex flex-1 flex-col items-center justify-center gap-4 relative z-10'>
                    <Heading
                        type='hero'
                        className='text-lime-800 drop-shadow-lg'
                    >
                        <span>Welcome to </span>
                        <span>San Antonio Korean School</span>
                    </Heading>
                    <p className='max-w-[700px] text-gray-500 text-sm lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 flex flex-col '>
                        {multiLineText(
                            `We value children's dreams and love. 
                        We are dedicated to providing a safe and happy learning environment for our students.`,
                            true
                        )}
                    </p>
                </div>
            </TopMain>
            <ScrollingBar />
        </>
    );
}
