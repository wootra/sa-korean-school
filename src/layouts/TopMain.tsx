import React from 'react';

const TopMain = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main className='grid min-h-[600px] w-full max-w-[800px] mx-auto items-start justify-center text-center'>
            {children}
        </main>
    );
};

export default TopMain;
