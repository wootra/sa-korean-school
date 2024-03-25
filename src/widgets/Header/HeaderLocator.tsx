'use client';

import { cn } from '@/lib/utils';
import React, { PropsWithChildren, RefObject, useEffect, useRef } from 'react';

const HeaderLocator = ({
    fixed = false,
    refToObserve,
    children,
}: PropsWithChildren<{
    fixed?: boolean;
    refToObserve?: RefObject<HTMLElement>;
}>) => {
    const [scrolled, setScrolled] = React.useState(false);

    useEffect(() => {
        const isFixed = fixed;
        let observer: IntersectionObserver | null = null;
        if (isFixed && refToObserve?.current) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setScrolled(false);
                    } else {
                        setScrolled(true);
                    }
                });
            });
            observer.observe(refToObserve.current);
        }
        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [fixed, refToObserve]);
    return (
        <header
            data-scrolled={scrolled}
            className={cn(
                'w-full group top-0 gap-4 z-[60] flex flex-row items-center px-4 text-sm font-medium',
                fixed
                    ? 'fixed font-extrabold transition-colors duration-500'
                    : 'sticky bg-white/90 border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800',
                fixed &&
                    (scrolled
                        ? ' bg-white/90 border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800'
                        : 'text-white')
            )}
        >
            <div
                className={cn(
                    'top-[100%] absolute w-full h-1 border-t-[1px] left-0 right-0 border-gray-200 drop-shadow',
                    fixed ? 'opacity-0' : ''
                )}
            ></div>
            {children}
        </header>
    );
};

export default HeaderLocator;
