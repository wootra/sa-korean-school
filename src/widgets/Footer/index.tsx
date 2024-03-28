import Image from 'next/image';
import React from 'react';
import logo from '@/assets/images/logo.png';
import Contacts from './Contacts';
import { Links } from './Links';
import { Languages } from '@/lib/langs/types';
import PrivacyPolicyLink from './PrivacyPolicyLink';
import TermsOfServiceLink from './TermsOfServiceLink';
const Footer = ({ lang }: { lang?: Languages }) => {
    return (
        <footer className='flex flex-col w-full min-h-32 bg-slate-100/50 border-t-8 gap-2 border-slate-600 mt-8 justify-start  dark:bg-gray-800'>
            <div className='flex flex-row flex-wrap items-start justify-start gap-4 h-full px-4 py-4'>
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
                    <div className='flex flex-col text-sm min-w-[180px]'>
                        <p className='font-semibold'>산안토니오 한국학교</p>
                        <p className='font-semibold'>
                            San Antonio Korean School
                        </p>

                        <p className='text-xs text-gray-500 dark:text-gray-400'>
                            The Official Korean School in San Antonio
                        </p>
                    </div>
                </div>
                <Contacts title='Contacts' />
                <Links />
            </div>
            <div className='flex flex-col justify-center items-center bg-slate-400  mt-2 min-h-8 py-1'>
                <div className='flex justify-center items-center text-xs w-full gap-x-2 gap-y-0 flex-wrap'>
                    Copyright{' '}
                    <span className='font-bold'>
                        ⓒ San Antonio Korean School
                    </span>{' '}
                    All Rights Reserved.
                </div>
                <div className='flex flex-row flex-wrap gap-4'>
                    <PrivacyPolicyLink lang={lang} />
                    <TermsOfServiceLink lang={lang} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
