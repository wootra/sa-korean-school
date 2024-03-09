import Link from 'next/link';
import React from 'react';
import SelectedLinkMark from './SelectedLinkMark';
import { ConstructionHat } from '@/assets/images';
import { cn } from '@/lib/utils';

const NavLink = ({
    children,
    href,
    notReady = false,
}: {
    children: React.ReactNode;
    href: string;
    notReady?: boolean;
}) => {
    return (
        <Link
            className='text-sm font-medium relative h-full gap-1 flex flex-row text-left justify-center items-center min-h-8'
            href={href}
        >
            <span className={notReady ? 'opacity-50' : ''}>{children}</span>
            {notReady && (
                <ConstructionHat className='w-2 h-2 text-yellow-500' />
            )}
            <SelectedLinkMark pathName={href} />
        </Link>
    );
};

export default NavLink;
