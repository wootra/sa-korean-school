'use server';

import Image from 'next/image';

import { CSSProperties } from 'react';

const ScrollingBar = async ({
    scrollImages,
}: {
    scrollImages: { desc: string; url: string }[];
}) => {
    return (
        <div className='flex flex-col w-full h-[300px] overflow-x-clip py-4 relative'>
            <div className='absolute left-0 inset-y-0 w-8 bg-gradient-to-r from-white to-transparent z-10'></div>
            <div className='absolute right-0 inset-y-0 w-8 bg-gradient-to-l from-white to-transparent z-10'></div>
            <div
                className='h-full w-full relative'
                aria-label='hero back image'
            >
                <div
                    className='flex flex-row flex-nowrap animate-scroll-x absolute w-[3380px] inset-y-0'
                    style={
                        {
                            '--itemWidth': `${338}px`,
                            '--animationDuration': `${
                                scrollImages.length * 10
                            }s`,
                        } as CSSProperties
                    }
                    aria-hidden
                >
                    {scrollImages.map((image, index) => (
                        <div
                            key={`image-${index}`}
                            className='w-[338px] flex items-center justify-center p-2'
                        >
                            <Image
                                src={image.url}
                                alt={image.desc}
                                width='326'
                                height='471'
                                loading='lazy'
                                className='object-cover rounded-lg'
                            />
                        </div>
                    ))}
                    {scrollImages.map((image, index) => (
                        <div
                            key={`image-${index}-repeat`}
                            className='w-[338px] flex items-center justify-center p-2'
                        >
                            <Image
                                src={image.url}
                                alt={image.desc}
                                width='326'
                                height='471'
                                loading='lazy'
                                className='object-cover rounded-lg'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScrollingBar;
