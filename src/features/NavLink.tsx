import Link from 'next/link';
import React from 'react';
import SelectedLinkMark from './SelectedLinkMark';
import { ConstructionHat } from '@/assets/images';
import { cn } from '@/lib/utils';

const NavLink = ({
    children,
    href,
    notReady = false,
    exact,
    className,
    onlyHorizontal = false,
}: {
    children: React.ReactNode;
    href: string;
    notReady?: boolean;
    className?: string;
    exact?: boolean;
    onlyHorizontal?: boolean;
}) => {
    return (
        <Link
            prefetch={true}
            className={cn(
                'text-sm font-medium relative h-full gap-1 flex flex-row text-left justify-center items-center min-h-8',
                className,
                !onlyHorizontal ? 'w-full sm:w-auto' : 'w-auto'
            )}
            href={href}
        >
            <span
                className={cn(
                    'hover:scale-125 transition-transform duration-500 ease-out',
                    notReady ? 'opacity-50' : ''
                )}
            >
                {children}
            </span>
            {notReady && (
                <ConstructionHat className='w-2 h-2 text-yellow-500' />
            )}
            <SelectedLinkMark
                pathName={href}
                exact={exact}
                onlyHorizontal={onlyHorizontal}
            />
        </Link>
    );
};

export default NavLink;
