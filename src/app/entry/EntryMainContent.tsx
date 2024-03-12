import Image from 'next/image';
import TopMain from '@/layouts/TopMain';
import { Heading } from '@/entities';
import { multiLineText } from '@/lib/jsxUtils';
import ScrollingBar from './ScrollingBar';
// import heroBack from '@/assets/images/samulnoli.jpg';
// import heroBack from '@/assets/images/dancheong.jpg';
import heroBack from '@/assets/images/eclipse.jpg';
export default function EntryMainContent() {
    return (
        <>
            <div className='w-[100vw] h-[100vh] relative flex justify-center items-center bg-green-950 bg-gradient-to-b from-green-950 to-green-800'>
                <Image
                    sizes='(min-width: 768px) 100vw, 100vw'
                    // width='1024'
                    // height='760'
                    src={heroBack}
                    alt='people in blue and white costume dancing on street during daytime'
                    style={{ aspectRatio: '1270 / 952' }}
                    className='h-[100vh] w-full object-cover absolute inset-0'
                    loading='lazy'
                />
                <Heading
                    type='hero'
                    className='text-white drop-shadow-lg z-20 relative text-center select-none'
                    style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
                >
                    <span>Welcome to </span>
                    <span>San Antonio Korean School</span>
                </Heading>
            </div>
            <TopMain className='bg-lime-100 drop-shadow-lg'>
                <div className='container flex flex-1 flex-col items-center justify-center gap-4 relative p-4'>
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
