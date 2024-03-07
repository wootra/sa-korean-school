import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className='flex w-full px-4 shrink-0 items-start justify-left py-4 bg-gray-100 dark:bg-gray-800'>
            <div className='flex items-center justify-center gap-2'>
                <Image
                    alt='San Antonio Korean School logo'
                    className='rounded-full'
                    height='40'
                    src='/logo.png'
                    style={{
                        aspectRatio: '40/40',
                        objectFit: 'cover',
                    }}
                    width='40'
                />
                <div className='grid gap-1 text-sm'>
                    <p className='font-semibold'>San Antonio Korean School</p>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                        The Official Korean School in San Antonio
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
