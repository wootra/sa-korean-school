import React from 'react';

const ResponsiveGridMain = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main className='grid min-h-[600px] w-full px-4 lg:max-w-[1024px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center'>
            {children}
        </main>
    );
};

export default ResponsiveGridMain;
