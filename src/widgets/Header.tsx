'use client';
import Link from 'next/link';
import Image from 'next/image';
import Nav from './Nav';
import useHash from '@/lib/routes/useHash';

const Header = () => {
    const hashes = useHash();

    return (
        <header className='group sticky top-0 z-50 flex h-14 items-center px-4 text-sm font-medium bg-white/90 border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800'>
            <label
                className='flex items-center font-bold w-40 flex-shrink-0 flex-grow-0 gap-2'
                htmlFor='menu-toggle'
            >
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
                <span className='flex flex-col'>
                    <span className='text-nowrap'>San Antonio</span>
                    <span className='text-nowrap'> Korean School</span>
                </span>
            </label>
            <input type='checkbox' id='menu-toggle' className='opacity-0' />
            <div className='hidden md:flex group-has-[input:checked]:flex flex-1'>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
