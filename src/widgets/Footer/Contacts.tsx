import { FacebookIcon, Heading } from '@/entities';
import FlexCol from '@/layouts/FlexCol';
import FlexRow from '@/layouts/FlexRow';
import React from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoMdHome } from 'react-icons/io';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const Contacts = ({
    withHeading = true,
    className,
}: {
    withHeading?: boolean;
    className?: string;
}) => {
    return (
        <FlexCol className={cn('text-xs min-w-[180px] items-start', className)}>
            {withHeading && <Heading type='footer'>Contacts</Heading>}
            <Link
                href='https://maps.app.goo.gl/Bj2irST4oksAHmKw8'
                className='underline text-blue-600 text-left'
                aria-label='move to google map'
            >
                <FlexRow className='gap-2'>
                    <IoMdHome className='w-4 h-4' />
                    {!withHeading && 'Address: '}
                    354 Heimer Rd. San Antonio, TX 78232
                </FlexRow>
            </Link>
            <Link
                href='mailto: sa.koreanschool@gmail.com'
                className='underline text-blue-600 text-left'
            >
                <FlexRow className='gap-2'>
                    <MdOutlineMailOutline className='w-4 h-4' />
                    {!withHeading && 'Email: '}
                    sa.koreanschool@gmail.com
                </FlexRow>
            </Link>
            <Link
                href='https://www.facebook.com/SanAntonioKoreanSchool/'
                className='underline text-blue-600 text-left'
            >
                <FlexRow className='gap-2 break-all'>
                    <FacebookIcon className='w-4 h-4' />
                    {!withHeading && 'Facebook: '}
                    @SanAntonioKoreanCommunitySchool
                </FlexRow>
            </Link>
        </FlexCol>
    );
};
export default Contacts;
