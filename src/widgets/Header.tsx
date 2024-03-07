'use client';
import Link from 'next/link';
import Image from 'next/image';
import UserInfoButton from '@/features/UserInfoButton';

const Header = () => {
    return (
        <header className='group sticky top-0 z-50 flex h-14 items-center px-4 text-sm font-medium bg-white/90 border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800'>
            <label
                className='flex md:pointer-events-none items-center font-bold w-40 flex-shrink-0 flex-grow-0 gap-2 cursor-pointer md:cursor-default'
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
            <nav className='hidden group-has-[input:checked]:flex md:flex flex-1 items-center justify-end gap-4 flex-col md:flex-row absolute left-0 top-[100%] bg-red-100 p-4 shadow-lg md:bg-transparent md:static md:shadow-none '>
                <Link className='text-sm font-medium' href='/'>
                    Home
                </Link>
                <Link className='text-sm font-medium' href='/about'>
                    About
                </Link>
                <Link className='text-sm font-medium' href='/courses'>
                    Courses
                </Link>
                <Link className='text-sm font-medium' href='/events'>
                    Events
                </Link>
                <Link className='text-sm font-medium' href='/payment'>
                    Payment
                </Link>
                <Link className='text-sm font-medium' href='/contacts'>
                    Contacts
                </Link>
                <UserInfoButton />
            </nav>
        </header>
    );
};

export default Header;
