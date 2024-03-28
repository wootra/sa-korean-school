import React, { PropsWithChildren } from 'react';

const BackHeader = ({ children }: PropsWithChildren) => {
    return (
        <div
            className='fixed text-3xl sm:text-6xl font-extrabold top-48 sm:top-32 left-8 -rotate-12 text-black/5 pointer-events-none select-none text-wrap'
            aria-hidden
        >
            {children}
        </div>
    );
};

export default BackHeader;
