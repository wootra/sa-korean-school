import { cn } from '@/lib/utils';
import React from 'react';

const CenterMain = ({
    children,
    className,
}: Readonly<{ children: React.ReactNode; className?: string }>) => {
    return (
        <div
            className={cn(
                'grid min-h-[600px] w-full text-center text-sm relative',
                className
            )}
        >
            {children}
        </div>
    );
};

export default CenterMain;
