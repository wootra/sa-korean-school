import Image from 'next/image';
import TopMain from '@/layouts/TopMain';
import { Heading } from '@/entities';
import { multiLineText } from '@/lib/jsxUtils';
import ScrollingBar from './ScrollingBar';
// import samulnori from '@/assets/images/samulnoli.jpg';
import dancheong from '@/assets/images/dancheong.jpg';

export default function EntryMainContent() {
    return (
        <>
            <div className='w-[100vw] h-[100vh] relative flex justify-center items-center bg-green-950-700'>
                <Image
                    // sizes='(min-width: 768px) 100vw, 100vw'
                    src={dancheong}
                    alt='people in blue and white costume dancing on street during daytime'
                    style={{ aspectRatio: '4683 / 3477' }}
                    className='h-[100vh] object-cover absolute inset-0'
                />
                <Heading
                    type='hero'
                    className='text-black drop-shadow-lg z-20 relative'
                    style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
                >
                    <Heading
                        type='hero'
                        className='text-white drop-shadow-lg z-10 absolute -left-1 -top-1 w-full h-full'
                        style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
                    >
                        <span>Welcome to </span>
                        <span>San Antonio Korean School</span>
                    </Heading>
                    <span>Welcome to </span>
                    <span>San Antonio Korean School</span>
                </Heading>
            </div>
            <TopMain>
                <div className='container flex flex-1 flex-col items-center justify-center gap-4 relative z-10'>
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
