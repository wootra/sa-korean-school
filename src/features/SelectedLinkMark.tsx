'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

const SelectedLinkMark = ({ pathName }: { pathName: string }) => {
    const currPathName = usePathname();

    return (
        <>
            <div
                className={`absolute transition-all w-[100%] bottom-[4px] h-[2px] duration-500 ${
                    pathName === currPathName
                        ? 'bg-red-600 left-0'
                        : 'bg-transparent -left-[100%]'
                } `}
            ></div>
            <div
                className={`absolute transition-all w-[100%] duration-500 bottom-[2px] h-[2px] ${
                    pathName === currPathName
                        ? 'bg-blue-600 right-0'
                        : 'bg-transparent -right-[100%]'
                } `}
            ></div>
        </>
    );
};

export default SelectedLinkMark;
