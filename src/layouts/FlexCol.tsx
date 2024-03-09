import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

const FlexCol = ({
    tag: Comp = 'div',
    className = '',
    children,
}: {
    tag?: React.ElementType;
    children: React.ReactNode;
    className?: string;
}) => {
    return <Comp className={cn('flex flex-col', className)}>{children}</Comp>;
};

export default FlexCol;
