import React from 'react';

const TopMain = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className='flex flex-col min-h-[600px] w-full max-w-[800px] mx-auto items-start justify-start text-center'>
            {children}
        </div>
    );
};

export default TopMain;
