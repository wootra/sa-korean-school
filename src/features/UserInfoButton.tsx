'use client';

import { useAuth } from '@/app/SessionContext';
import Image from 'next/image';
import Link from 'next/link';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import React, { PropsWithChildren, useRef } from 'react';
import { cn } from '@/lib/utils';
import { FacebookIcon } from '@/entities';
import { Button } from '@/components/ui/button';
import { UrlObject } from 'url';

const components: { title: string; href: string; description: string }[] = [
    {
        title: 'Alert Dialog',
        href: '/docs/primitives/alert-dialog',
        description:
            'A modal dialog that interrupts the user with important content and expects a response.',
    },
    {
        title: 'Hover Card',
        href: '/docs/primitives/hover-card',
        description:
            'For sighted users to preview content available behind a link.',
    },
    {
        title: 'Progress',
        href: '/docs/primitives/progress',
        description:
            'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
    {
        title: 'Scroll-area',
        href: '/docs/primitives/scroll-area',
        description: 'Visually or semantically separates content.',
    },
    {
        title: 'Tabs',
        href: '/docs/primitives/tabs',
        description:
            'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    },
    {
        title: 'Tooltip',
        href: '/docs/primitives/tooltip',
        description:
            'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    },
];
const LoginButton = () => {
    const { login } = useAuth();
    return (
        <Link
            // href={loginUrl}
            href='#'
            onClick={e => {
                e.preventDefault();
                login();
            }}
            className='rounded-full w-8 h-8 p-0'
        >
            <Image
                src='/facebook-logo.svg'
                alt='facebook login'
                width='20'
                height='20'
            />
            {/* <FacebookIcon className='bg-blue-300 rounded-full' /> */}
        </Link>
    );
};
const ProfileButton = () => {
    const { logout } = useAuth();
    const ref = useRef(Math.floor(Math.random() * 1000));
    return (
        <Button
            onClick={logout}
            variant={'ghost'}
            className='rounded-full w-8 h-8 p-0'
            aria-label='logout'
        >
            <Image
                src={`/avatar_icons/cropped_icon_${(ref.current % 9) + 1}.png`}
                alt='profiletwentyfo'
                width='30'
                height='30'
            />
        </Button>
    );
};
const UserInfoButton = () => {
    // const { data: session, status } = useSession();
    const { user, login, logout } = useAuth();
    const isLoggedIn = !!user.token;
    console.log('user is:', user);
    return (
        // <div className='flex-1 items-end flex flex-row sm:block sm:w-8 sm:flex-none bg-transparent'>
        !isLoggedIn ? <LoginButton /> : <ProfileButton />
        // </div>
    );
    // return (
    //     <Link
    //         href={loginUrl}
    //         // href='#'
    //         // onClick={e => {
    //         //     e.preventDefault();
    //         //     signIn('facebook');
    //         // }}
    //         className='rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800 p-0'
    //     >
    //         <Image
    //             src={
    //                 session?.user?.image ?? '/images/img_profile_24_outline.svg'
    //             }
    //             alt='profiletwentyfo'
    //             width='30'
    //             height='30'
    //         />
    //     </Link>
    // );
};
export default UserInfoButton;

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    href={href as string | UrlObject}
                >
                    <div className='text-sm font-medium leading-none'>
                        {title}
                    </div>
                    <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
