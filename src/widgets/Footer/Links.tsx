import { Heading } from '@/entities';
import FlexCol from '@/layouts/FlexCol';
import FlexRow from '@/layouts/FlexRow';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Link from 'next/link';
import mofat from './images/mofat-go-kr-banner.jpg';
import _0404 from './images/0404-go-kr-banner.jpg';
import okocc from './images/okocc-or-kr-banner.jpg';
import koreanNet from './images/korean-net.jpg';
import studyKorean from './images/study-korean-net-banner.jpg';

export const Links = () => {
    return (
        <FlexCol className='flex-1 text-xs min-w-[240px]'>
            <Heading type='footer'>Links</Heading>
            <FlexRow className='flex flex-row gap-2 flex-wrap'>
                <LinkWithImg
                    href='http://www.mofat.go.kr/'
                    label='외교부'
                    src={mofat}
                />
                <LinkWithImg
                    href='http://www.0404.go.kr/'
                    label='외교부 해외 안전 여행'
                    src={_0404}
                />
                <LinkWithImg
                    href='https://www.okocc.or.kr/'
                    label='재외동포 협력센터'
                    src={okocc}
                />
                <LinkWithImg
                    href='http://www.korean.net/'
                    label='korean net'
                    src={koreanNet}
                />
                <LinkWithImg
                    href='http://study.korean.net/'
                    label='study korean dot net'
                    src={studyKorean}
                />
            </FlexRow>
        </FlexCol>
    );
};

const LinkWithImg = ({
    href,
    label,
    src,
}: {
    href: string;
    label: string;
    src: StaticImageData;
}) => {
    return (
        <Link
            href={href}
            target='_blank'
            className='underline text-blue-600'
            aria-label={label}
        >
            <Image
                width='173'
                height='49'
                src={src}
                alt={label}
                className='w-16'
            />
        </Link>
    );
};
