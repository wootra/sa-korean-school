import React from 'react';

const ResponsiveGridMain = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main className='grid min-h-[600px] w-full max-w-[800px] mx-auto grid-cols-2 gap-4 text-center'>
            {children}
        </main>
    );
};

export default ResponsiveGridMain;
