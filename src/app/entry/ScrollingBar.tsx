'use server';

import Image from 'next/image';

import { CSSProperties } from 'react';
import { ScrollProps } from './consts';

const ScrollingBar = async ({
    scrollImages,
}: {
    scrollImages: { desc: string; url: string }[];
}) => {
    const duplicatedImages = [...scrollImages, ...scrollImages];
    const pictureContainerWidth = ScrollProps.pictureWidth + 16; //16 is p-2 (8px * 2)
    return (
        <div className='flex flex-col w-full h-[300px] overflow-x-clip py-4 relative'>
            <div className='absolute left-0 inset-y-0 w-8 bg-gradient-to-r from-white to-transparent z-10'></div>
            <div className='absolute right-0 inset-y-0 w-8 bg-gradient-to-l from-white to-transparent z-10'></div>
            <div
                className='h-full w-full relative'
                aria-label='scrolling images'
            >
                <div
                    className='flex flex-row flex-nowrap animate-scroll-x absolute inset-y-0'
                    style={
                        {
                            '--itemCount': scrollImages.length,
                            '--itemWidth': `${pictureContainerWidth}px`,
                            '--animationDuration': `${
                                duplicatedImages.length * ScrollProps.secPerPic
                            }s`,
                            width: `${
                                pictureContainerWidth * duplicatedImages.length
                            }px`,
                        } as CSSProperties
                    }
                    aria-hidden
                >
                    {duplicatedImages.map((image, index) => (
                        <div
                            key={`image-${index}`}
                            className='flex items-center justify-center p-2 overflow-hidden'
                            style={{
                                width: `${pictureContainerWidth}px`,
                            }}
                        >
                            <Image
                                src={image.url}
                                alt={image.desc}
                                width={ScrollProps.pictureWidth}
                                height={ScrollProps.pictureHeight}
                                loading='lazy'
                                style={{
                                    aspectRatio: `${ScrollProps.pictureWidth}/${ScrollProps.pictureHeight}`,
                                    objectFit: 'cover',
                                }}
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
