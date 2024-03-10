import Image from 'next/image';
import React from 'react';
import logo from '@/assets/images/logo.png';
import Contacts from './Contacts';
import { Links } from './Links';
const Footer = () => {
    return (
        <footer className='flex flex-col w-full min-h-32 px-4 bg-white border-t-8 gap-2 border-black/50 mt-8 justify-start py-4 dark:bg-gray-800'>
            <div className='flex flex-row flex-wrap items-start justify-start gap-4 h-full'>
                <div className='flex flex-row flex-wrap items-start justify-center gap-2 h-full'>
                    <Image
                        alt='San Antonio Korean School logo'
                        className='rounded-full flex-none'
                        height='40'
                        src={logo}
                        style={{
                            aspectRatio: '40/40',
                            objectFit: 'cover',
                        }}
                        width='40'
                    />
                    <div className='flex flex-col text-sm flex-none w-[200px]'>
                        <p className='font-semibold'>산안토니오 한국학교</p>
                        <p className='font-semibold'>
                            San Antonio Korean School
                        </p>

                        <p className='text-xs text-gray-500 dark:text-gray-400'>
                            The Official Korean School in San Antonio
                        </p>
                    </div>
                </div>
                <Contacts />
                <Links />
            </div>
            <div className='flex justify-center items-center text-xs'>
                Copyright ⓒ San Antonio Korean School All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
