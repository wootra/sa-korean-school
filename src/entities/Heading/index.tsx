import { cn } from '@/lib/utils';
import React from 'react';
type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
const HEADING_TYPE_TO_SIZE = Object.freeze({
    hero: 'h1',
    page: 'h2',
    footer: 'h3',
});

type HeadingTypes = keyof typeof HEADING_TYPE_TO_SIZE;

type Props = {
    size?: HeadingSize;
    type?: HeadingTypes;
    children: React.ReactNode;
};
const Heading = ({ type, size, children }: Props) => {
    const HeadingTag = size ?? HEADING_TYPE_TO_SIZE[type ?? 'page'];
    return (
        <HeadingTag
            className={cn(
                HeadingTag === 'h1' &&
                    'text-[clamp(1.5rem,4vw,3rem)] font-bold flex flex-col',
                HeadingTag === 'h2' &&
                    'text-lg font-bold my-2 text-blue-900/70 text-left',
                HeadingTag === 'h3' && 'text-md font-bold mb-3',
                HeadingTag === 'h4' && 'text-lg font-bold',
                HeadingTag === 'h5' && 'text-lg font-bold',
                HeadingTag === 'h6' && 'text-lg font-bold'
            )}
        >
            {children}
        </HeadingTag>
    );
};

export default Heading;
