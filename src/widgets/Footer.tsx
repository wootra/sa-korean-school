import { FacebookIcon, Heading } from '@/entities';
import FlexCol from '@/layouts/FlexCol';
import FlexRow from '@/layouts/FlexRow';
import Image from 'next/image';
import React from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoMdHome } from 'react-icons/io';
import Link from 'next/link';

const Footer = async () => {
    return (
        <footer className='flex flex-col w-full min-h-32 px-4 bg-white border-t-[1px] gap-2 border-gray-200 mt-8 justify-start py-4 dark:bg-gray-800'>
            <div className='flex flex-row flex-wrap items-start justify-center gap-2 h-full'>
                <Image
                    alt='San Antonio Korean School logo'
                    className='rounded-full flex-none'
                    height='40'
                    src='/logo.png'
                    style={{
                        aspectRatio: '40/40',
                        objectFit: 'cover',
                    }}
                    width='40'
                />
                <div className='flex flex-col text-sm flex-none w-[200px]'>
                    <p className='font-semibold'>산안토니오 한국학교</p>
                    <p className='font-semibold'>San Antonio Korean School</p>

                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                        The Official Korean School in San Antonio
                    </p>
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
const Contacts = async () => {
    return (
        <FlexCol className='flex-1 text-xs min-w-[240px]'>
            <Heading type='footer'>Contacts</Heading>
            <Link
                href='https://maps.app.goo.gl/Bj2irST4oksAHmKw8'
                className='underline text-blue-600'
                aria-label='move to google map'
            >
                <FlexRow className='gap-2'>
                    <IoMdHome className='w-4 h-4' /> 354 Heimer Rd. San Antonio,
                    TX 78232
                </FlexRow>
            </Link>
            <Link
                href='mailto: sa.koreanschool@gmail.com'
                className='underline text-blue-600'
            >
                <FlexRow className='gap-2'>
                    <MdOutlineMailOutline className='w-4 h-4' />
                    sa.koreanschool@gmail.com
                </FlexRow>
            </Link>
            <Link
                href='https://www.facebook.com/SanAntonioKoreanSchool/'
                className='underline text-blue-600'
            >
                <FlexRow className='gap-2'>
                    <FacebookIcon className='w-4 h-4' />
                    @SanAntonioKoreanCommunitySchool
                </FlexRow>
            </Link>
        </FlexCol>
    );
};
const Links = async () => {
    return (
        <FlexCol className='flex-1 text-xs min-w-[240px]'>
            <Heading type='footer'>Links</Heading>
            <FlexRow className='flex flex-row gap-2 flex-wrap'>
                <Link
                    href='http://www.mofat.go.kr/'
                    target='_blank'
                    className='underline text-blue-600'
                    aria-label='외교부'
                >
                    <Image
                        width='173'
                        height='49'
                        src='/mofat-go-kr-banner.jpg'
                        alt='외교부'
                        className='w-16'
                    />
                </Link>
                <Link
                    href='http://www.0404.go.kr/'
                    target='_blank'
                    className='underline text-blue-600'
                    aria-label='외교부 해외 안전 여행'
                >
                    <Image
                        width='173'
                        height='49'
                        src='/0404-go-kr-banner.jpg'
                        alt='외교부 해외 안전 여행'
                        className='w-16'
                    />
                </Link>
                <Link
                    href='https://www.okocc.or.kr/'
                    target='_blank'
                    className='underline text-blue-600'
                    aria-label='재외동포 협력센터'
                >
                    <Image
                        width='173'
                        height='49'
                        src='/okocc-or-kr-banner.jpg'
                        alt='재외동포 협력센터'
                        className='w-16'
                    />
                </Link>
                <Link
                    href='http://www.korean.net/'
                    target='_blank'
                    className='underline text-blue-600'
                    aria-label='korean net'
                >
                    <Image
                        width='173'
                        height='49'
                        src='/korean-net.jpg'
                        alt='korean net'
                        className='w-16'
                    />
                </Link>
                <Link
                    href='http://study.korean.net/'
                    target='_blank'
                    className='underline text-blue-600'
                    aria-label='study korean dot net'
                >
                    <Image
                        width='173'
                        height='49'
                        src='/study-korean-net-banner.jpg'
                        alt='study korean dot net'
                        className='w-16'
                    />
                </Link>
            </FlexRow>
        </FlexCol>
    );
};
