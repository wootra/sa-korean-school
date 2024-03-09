'use server';

import Image from 'next/image';
import UserInfoButton from '@/features/UserInfoButton';
import NavLink from '@/features/NavLink';

const Header = async () => {
    return (
        <header className='group sticky top-0 gap-4 z-50 flex flex-row items-center px-4 text-sm font-medium bg-white/90 border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800'>
            <label
                htmlFor='menu-toggle'
                className='flex md:pointer-events-none items-center font-bold w-40 flex-shrink-0 flex-grow-0 gap-2 cursor-pointer md:cursor-default py-2 md:py-4'
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
                <div className='group-has-[input:checked]:block hidden absolute w-[100vw] h-[100vh] bg-white/70 left-0 top-0 -z-10'></div>
            </label>
            <input type='checkbox' id='menu-toggle' className='opacity-0' />
            <nav className='hidden p-4 sm:p-0 sm:justify-end group-has-[input:checked]:flex sm:flex flex-1 items-start sm:items-center justify-start gap-2 sm:gap-4 flex-col sm:flex-row absolute left-0 top-[100%] bg-gray-100 border-r-[1px] border-b-[1px] border-gray-200 sm:border-none shadow-lg sm:bg-transparent sm:static sm:shadow-none '>
                <NavLink href='/'>Home</NavLink>
                <NavLink href='/about' notReady>
                    About
                </NavLink>
                <NavLink href='/courses' notReady>
                    Courses
                </NavLink>
                <NavLink href='/events' notReady>
                    Events
                </NavLink>
                <NavLink href='/payment'>Payment</NavLink>
                <NavLink href='/contacts'>Contacts</NavLink>
            </nav>
            <div className='flex h-full flex-row min-w-8 items-center justify-end pr-2 sm:pr-0 sm:items-center sm:justify-center flex-1 sm:flex-none'>
                <UserInfoButton />
            </div>
        </header>
    );
};

export default Header;
