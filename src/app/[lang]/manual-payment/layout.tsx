import React from 'react';
import FullWidth from '@/layouts/FullWidth';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <FullWidth>
            <div className='w-full max-w-[800px] mx-auto my-4'>{children}</div>
        </FullWidth>
    );
};

export default layout;
