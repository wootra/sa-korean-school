import { cn } from '@/lib/utils';
import React from 'react';

const CenterMain = ({
    children,
    className,
}: Readonly<{ children: React.ReactNode; className?: string }>) => {
    return (
        <div
            className={cn(
                'grid min-h-[calc(100vh-200px)] w-full text-center text-sm relative place-items-center items-start',
                className
            )}
        >
            {children}
        </div>
    );
};

export default CenterMain;
