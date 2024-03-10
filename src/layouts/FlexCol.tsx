import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

const FlexCol = ({
    tag: Comp = 'div',
    center,
    className = '',
    children,
}: {
    tag?: React.ElementType;
    children: React.ReactNode;
    center?: boolean;
    className?: string;
}) => {
    return (
        <Comp
            className={cn(
                'flex flex-col',
                className,
                center && 'justify-center items-center'
            )}
        >
            {children}
        </Comp>
    );
};

export default FlexCol;
