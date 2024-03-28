'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const FakeInput = ({ id }: { id: string }) => {
    const path = usePathname();
    useEffect(() => {
        (document.getElementById(id) as HTMLInputElement)?.click();
    }, [path, id]);
    return <input type='checkbox' id={id} className='opacity-0 min-w-0 w-0' />;
};

export default FakeInput;
