import { cn } from '@/lib/utils';
import React from 'react';

const FlexCenter = ({
    children,
    className,
}: Readonly<{ children: React.ReactNode; className?: string }>) => {
    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center min-h-[calc(100vh-320px)] w-full relative px-4',
                className
            )}
        >
            {children}
        </div>
    );
};

export default FlexCenter;
