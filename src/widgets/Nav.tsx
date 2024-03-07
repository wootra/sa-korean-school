import Link from 'next/link';
import React from 'react';
import UserInfoButton from '@/features/UserInfoButton';

const Nav = () => {
    return (
        <nav className='group-checked:bg-red flex flex-1 items-center justify-end gap-4 flex-col md:flex-row absolute left-0 top-[100%] bg-red-100 p-4 shadow-lg md:bg-transparent md:static md:shadow-none '>
            <Link className='text-sm font-medium' href='/about'>
                About
            </Link>
            <Link className='text-sm font-medium' href='#'>
                Courses
            </Link>
            <Link className='text-sm font-medium' href='#'>
                Events
            </Link>
            <Link className='text-sm font-medium' href='/payment'>
                Payment
            </Link>
            <Link className='text-sm font-medium' href='#'>
                Contact
            </Link>
            <UserInfoButton />
        </nav>
    );
};

export default Nav;
