import Link from 'next/link';
import React from 'react';
import SelectedLinkMark from './SelectedLinkMark';

const NavLink = ({
    children,
    href,
}: {
    children: React.ReactNode;
    href: string;
}) => {
    return (
        <Link
            className='text-sm font-medium relative h-full flex flex-col justify-center items-center'
            href={href}
        >
            {children}
            <SelectedLinkMark pathName={href} />
        </Link>
    );
};

export default NavLink;
