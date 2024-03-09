import React from 'react';

const CenterMain = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main className='grid min-h-[600px] w-full text-center'>
            {children}
        </main>
    );
};

export default CenterMain;
