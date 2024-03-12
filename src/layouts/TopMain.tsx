import { cn } from '@/lib/utils';
import React from 'react';

const TopMain = ({
    children,
    className,
    limitedSize = false,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
    limitedSize?: boolean;
}>) => {
    return (
        <div
            className={cn(
                'flex flex-col w-full  items-start justify-start text-center text-sm',
                className,
                limitedSize && 'max-w-[800px] lg:max-w-[1024px] mx-auto'
            )}
        >
            {children}
        </div>
    );
};

export default TopMain;
