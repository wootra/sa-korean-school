import React from 'react';

const TopMain = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className='flex flex-col w-full max-w-[800px] lg:max-w-[1024px] mx-auto items-start justify-start text-center text-sm'>
            {children}
        </div>
    );
};

export default TopMain;
