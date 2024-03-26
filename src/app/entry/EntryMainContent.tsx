'use server';

import Image from 'next/image';
import TopMain from '@/layouts/TopMain';
import { Heading } from '@/entities';
import { multiLineText } from '@/lib/jsxUtils';
import ScrollingBar from './ScrollingBar';
import { getEntryImages } from '@/lib/google-sheets/entryImages';

export default async function EntryMainContent() {
    const pictureGroup = await getEntryImages();
    const heroImage = pictureGroup['main-hero']?.[0]; // ?? heroBack
    const scrollImages = pictureGroup['main-scroll'] ?? [];
    return (
        <>
            <div
                className='w-[100vw] h-[100vh] relative flex justify-center items-center bg-green-950 bg-gradient-to-b from-green-950 to-green-800'
                style={{ backgroundImage: `url(${heroImage?.url})` }}
            >
                <Image
                    sizes='(min-width: 768px) 100vw, 100vh'
                    fill
                    src={heroImage?.url}
                    alt={heroImage?.desc}
                    style={{ objectFit: 'cover' }}
                    className='h-[100vh] w-full object-cover absolute inset-0'
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
            <TopMain className='bg-lime-600 drop-shadow-lg'>
                <div className='container flex flex-1 flex-col items-center justify-center gap-4 relative p-4'>
                    <p className='max-w-[700px] text-white/90 text-sm lg:text-base/relaxed xl:text-xl/relaxed flex flex-col '>
                        {multiLineText(
                            `We value children's dreams 🛌 and love💖. 
                        Join our safe and happy learning environment!`,
                            true
                        )}
                    </p>
                </div>
            </TopMain>
            <ScrollingBar scrollImages={scrollImages} />
        </>
    );
}
