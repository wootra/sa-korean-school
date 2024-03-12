import React from 'react';

const FullWidth = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return <div className='flex flex-col w-full relative'>{children}</div>;
};

export default FullWidth;
