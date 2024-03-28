import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/logo.png';
import { multiLineTextIntoBlocks } from '@/lib/jsxUtils';
import { Languages } from '@/lib/langs/types';
import { NAVS } from './consts';

const HeaderImage = ({ lang }: { lang: Languages }) => {
    const navs = NAVS[lang] ?? NAVS.en;
    return (
        <>
            <Link
                href='/entry'
                className='hidden sm:flex py-2 md:py-4 font-bold gap-2'
            >
                <Image
                    alt='San Antonio Korean School logo'
                    className='rounded-full'
                    height='40'
                    src={logo}
                    style={{
                        aspectRatio: '40/40',
                        objectFit: 'cover',
                    }}
                    width='40'
                />
                <span
                    className='flex flex-col'
                    style={{ fontSize: 'clamp(0.2rem, 3vw, 1.2rem)' }}
                >
                    {multiLineTextIntoBlocks(navs.logo, 'text-nowrap')}
                </span>
            </Link>
            <label
                htmlFor='menu-toggle'
                className='flex sm:hidden md:pointer-events-none items-center w-40 flex-grow-0 gap-2 cursor-pointer md:cursor-default py-2 md:py-4'
            >
                <Image
                    alt='San Antonio Korean School logo'
                    className='rounded-full'
                    height='40'
                    src={logo}
                    style={{
                        aspectRatio: '40/40',
                        objectFit: 'cover',
                    }}
                    width='40'
                />
                <span className='flex flex-col font-bold'>
                    {multiLineTextIntoBlocks(navs.logo, 'text-nowrap')}
                </span>
                <div className='group-has-[input:checked]:block hidden absolute w-[100vw] h-[100vh] bg-white/70 left-0 top-0 -z-10'></div>
            </label>
        </>
    );
};

export default HeaderImage;
