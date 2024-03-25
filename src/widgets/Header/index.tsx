import Image from 'next/image';
import UserInfoButton from '@/features/UserInfoButton';
import NavLink from '@/features/NavLink';
import Link from 'next/link';
import logo from '@/assets/images/logo.png';
import HeaderLocator from './HeaderLocator';
import { PropsWithChildren, RefObject } from 'react';
import { twMerge } from 'tailwind-merge';
import { Languages } from '@/lib/langs/types';
import LangChoiceButton from '@/features/LangChoiceButton';
const MainNav = (
    props: PropsWithChildren<{ className?: string; href: string }>
) => {
    const { className, href, children } = props;
    return (
        <NavLink
            href={href}
            className={twMerge(
                'group-has-[*]/entry:group-has-[input:checked]:text-slate-700 group-has-[*]/entry:group-has-[input:checked]:flex:sm:text-white',
                className
            )}
        >
            {children}
        </NavLink>
    );
};
const Header = ({
    fixed,
    lang,
    refToObserve,
}: {
    fixed?: boolean;
    lang: Languages;
    refToObserve?: RefObject<HTMLElement>;
}) => {
    return (
        <HeaderLocator fixed={fixed} refToObserve={refToObserve}>
            <Link
                href='/entry'
                className='hidden sm:flex py-2 md:py-4 font-bold gap-2'
            >
                <Image
                    alt='San Antonio Korean School logo'
                    className='rounded-full'
                    height='40'
                    src={logo}
                    style={{
                        aspectRatio: '40/40',
                        objectFit: 'cover',
                    }}
                    width='40'
                />
                <span
                    className='flex flex-col'
                    style={{ fontSize: 'clamp(0.2rem, 3vw, 1.2rem)' }}
                >
                    <span className='text-nowrap'>San Antonio</span>
                    <span className='text-nowrap'> Korean School</span>
                </span>
            </Link>
            <label
                htmlFor='menu-toggle'
                className='flex sm:hidden md:pointer-events-none items-center w-40 flex-grow-0 gap-2 cursor-pointer md:cursor-default py-2 md:py-4'
            >
                <Image
                    alt='San Antonio Korean School logo'
                    className='rounded-full'
                    height='40'
                    src={logo}
                    style={{
                        aspectRatio: '40/40',
                        objectFit: 'cover',
                    }}
                    width='40'
                />
                <span className='flex flex-col font-bold'>
                    <span className='text-nowrap'>San Antonio</span>
                    <span className='text-nowrap'> Korean School</span>
                </span>
                <div className='group-has-[input:checked]:block hidden absolute w-[100vw] h-[100vh] bg-white/70 left-0 top-0 -z-10'></div>
            </label>
            <input
                type='checkbox'
                id='menu-toggle'
                className='opacity-0 min-w-0 w-0'
            />

            <nav className='hidden sm:flex p-4 sm:p-0 sm:justify-end group-has-[input:checked]:flex flex-1 items-start sm:items-center justify-start gap-2 sm:gap-4 flex-col sm:flex-row absolute left-0 top-[100%] bg-gray-100 border-r-[1px] border-b-[1px] border-gray-200 sm:border-none shadow-lg sm:bg-transparent sm:static sm:shadow-none'>
                <MainNav href='/entry' className='sm:hidden md:flex'>
                    Home
                </MainNav>
                <MainNav href={`/${lang}/about`}>About</MainNav>
                <MainNav href={`/${lang}/courses`}>Courses</MainNav>
                <MainNav href={`/${lang}/events`}>Events</MainNav>
                <MainNav href={`/${lang}/manual-payment`}>Payment</MainNav>
                <MainNav href={`/${lang}/contacts`}>Contacts</MainNav>
            </nav>
            <div className='flex h-full min-w-fit flex-row basis-9 items-center justify-end p-0 flex-1 sm:flex-0 sm:flex-none'>
                <LangChoiceButton />
                <UserInfoButton />
            </div>
        </HeaderLocator>
    );
};

export default Header;
