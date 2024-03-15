import { cn } from '@/lib/utils';
import React from 'react';

const FlexCenter = ({
    children,
    className,
}: Readonly<{ children: React.ReactNode; className?: string }>) => {
    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center min-h-[600px] w-full relative',
                className
            )}
        >
            {children}
        </div>
    );
};

export default FlexCenter;
