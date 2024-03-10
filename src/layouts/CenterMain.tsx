import React from 'react';

const CenterMain = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className='grid min-h-[600px] w-full text-center'>{children}</div>
    );
};

export default CenterMain;
