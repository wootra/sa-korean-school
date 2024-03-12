import React from 'react';

const ResponsiveGridMain = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className='relative grid w-full p-4 lg:max-w-[1024px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center text-sm'>
            {children}
        </div>
    );
};

export default ResponsiveGridMain;
