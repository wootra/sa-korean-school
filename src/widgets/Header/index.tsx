import UserInfoButton from '@/features/UserInfoButton';
import NavLink from '@/features/NavLink';
import HeaderLocator from './HeaderLocator';
import { PropsWithChildren, RefObject } from 'react';
import { twMerge } from 'tailwind-merge';
import { Languages } from '@/lib/langs/types';
import LangChoiceButton from '@/features/LangChoiceButton';
import { NAVS } from './consts';
import HeaderImage from './HeaderImage';
import FakeInput from './FakeInput';
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
    const navs = NAVS[lang] ?? NAVS.en;
    return (
        <HeaderLocator fixed={fixed} refToObserve={refToObserve}>
            <HeaderImage lang={lang} />
            <FakeInput id='menu-toggle' />
            <nav className='-left-full sm:flex p-4 sm:p-0 sm:justify-end group-has-[input:checked]:flex flex-1 items-start sm:items-center justify-start gap-2 sm:gap-4 flex-col sm:flex-row absolute group-has-[input:checked]:left-0 top-[100%] bg-gray-100 border-r-[1px] border-b-[1px] border-gray-200 sm:border-none shadow-lg sm:bg-transparent sm:static sm:shadow-none transition-all sm:transition-none min-w-[80%] sm:min-w-0'>
                <MainNav href='/entry' className='sm:hidden md:flex'>
                    {navs.home}
                </MainNav>
                <MainNav href={`/${lang}/about`}>{navs.about}</MainNav>
                <MainNav href={`/${lang}/courses`}>{navs.courses}</MainNav>
                <MainNav href={`/${lang}/events`}>{navs.events}</MainNav>
                <MainNav href={`/${lang}/payment/manual-payment`}>
                    {navs.payment}
                </MainNav>
                <MainNav href={`/${lang}/contacts`}>{navs.contacts}</MainNav>
            </nav>
            <div className='flex gap-2 h-full min-w-fit flex-row basis-9 items-center justify-end p-0 flex-1 sm:flex-0 sm:flex-none'>
                <LangChoiceButton />
                <UserInfoButton />
            </div>
        </HeaderLocator>
    );
};

export default Header;
