import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

const FlexRow = ({
    tag: Comp = 'div',
    className = '',
    children,
}: {
    tag?: React.ElementType;
    children: React.ReactNode;
    className?: string;
}) => {
    return <Comp className={cn('flex flex-row', className)}>{children}</Comp>;
};

export default FlexRow;
