import { FacebookIcon, Heading } from '@/entities';
import FlexCol from '@/layouts/FlexCol';
import FlexRow from '@/layouts/FlexRow';
import Image from 'next/image';
import React from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoMdHome } from 'react-icons/io';
import Link from 'next/link';
import logo from '@/assets/images/logo.png';

export const Contacts = () => {
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
export default Contacts;
