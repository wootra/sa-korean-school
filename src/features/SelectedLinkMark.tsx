'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

const SelectedLinkMark = ({ pathName }: { pathName: string }) => {
    const currPathName = usePathname();

    return (
        <>
            <div
                className={`absolute transition-all hidden sm:block w-[100%] bottom-[2px] h-[2px] duration-500 pointer-events-none ${
                    pathName === currPathName
                        ? 'bg-red-600 left-0'
                        : 'bg-transparent -left-[100%]'
                } `}
            ></div>
            <div
                className={`absolute transition-all hidden sm:block w-[100%] duration-500 bottom-[0px] h-[2px] pointer-events-none ${
                    pathName === currPathName
                        ? 'bg-blue-600 right-0'
                        : 'bg-transparent -right-[100%]'
                } `}
            ></div>

            {
                // for vertical menu
            }
            <div
                className={`absolute transition-all h-[100%] left-[-8px] w-[2px] sm:hidden duration-500 pointer-events-none ${
                    pathName === currPathName
                        ? 'bg-red-600 top-0'
                        : 'bg-transparent -top-[100%]'
                } `}
            ></div>
            <div
                className={`absolute transition-all h-[100%] left-[-6px] w-[2px] sm:hidden pointer-events-none ${
                    pathName === currPathName
                        ? 'bg-blue-600 bottom-0'
                        : 'bg-transparent -bottom-[100%]'
                } `}
            ></div>
        </>
    );
};

export default SelectedLinkMark;
