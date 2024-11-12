import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const InfoSection = ({
    children,
    type = 1,
    className,
}: PropsWithChildren<{ className?: string; type?: number }>) => {
    return (
        <section
            className={twMerge(
                type === 1 && 'bg-slate-600/15',
                type === 2 && 'bg-yellow-600/15',
                'text-sm p-4 rounded-md shadow-sm flex flex-col',
                className
            )}
        >
            {children}
        </section>
    );
};

export default InfoSection;
