import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

const FlexRow = ({
    tag: Comp = 'div',
    className = '',
    children,
    center,
}: {
    tag?: React.ElementType;
    children: React.ReactNode;
    className?: string;
    center?: boolean;
}) => {
    return (
        <Comp
            className={cn(
                'flex flex-row',
                className,
                center && 'justify-center items-center'
            )}
        >
            {children}
        </Comp>
    );
};

export default FlexRow;
