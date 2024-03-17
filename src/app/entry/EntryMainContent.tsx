'use server';

import Image from 'next/image';
import TopMain from '@/layouts/TopMain';
import { Heading } from '@/entities';
import { multiLineText } from '@/lib/jsxUtils';
import ScrollingBar from './ScrollingBar';
import { convertImageUrlFromGoogleDrive } from '@/lib/routes/convertUrlFromGoogleDrive';
// import heroBack from '@/assets/images/samulnoli.jpg';
// import heroBack from '@/assets/images/dancheong.jpg';
// import heroBack from '@/assets/images/eclipse.jpg';

export default async function EntryMainContent() {
    const spreadsheetId = process.env.HERO_PICTURES_ID;
    // const fields = 'sheets.data.rowData.values.value';
    const apiKey = process.env.GOOGLE_SHEET_API_KEY;
    const bound = 'Sheet1!A2:C100';
    const resp = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${bound}`,
        {
            method: 'GET',
            headers: {
                'X-goog-api-key': apiKey,
                'Content-Type': 'application/json; charset=utf-8',
            },
        }
    );
    const data = await resp.json();

    const rows: string[][] = data.values ?? []; //[0].values ?? [];
    const pictureGroup = rows.reduce((obj, row) => {
        const classGroup = row[0].replaceAll('\b', '');
        const desc = row[1] ?? 'TBD';
        const url = row[2] ?? 'TBD';
        if (classGroup) {
            if (!obj[classGroup]) {
                obj[classGroup] = [];
            }
            const size = classGroup === 'main-hero' ? 1440 : 640;
            obj[classGroup].push({
                desc,
                url: convertImageUrlFromGoogleDrive(url, size),
            });
        }
        return obj;
    }, {} as Record<string, { desc: string; url: string }[]>);
    console.log('image data:', JSON.stringify(pictureGroup, null, 2));
    const heroImage = pictureGroup['main-hero']?.[0]; // ?? heroBack
    console.log(
        'hero image:',
        JSON.stringify(pictureGroup['main-hero'], null, 2)
    );
    console.log('main-hero:', JSON.stringify(heroImage, null, 2));
    console.log('main-hero url:', JSON.stringify(heroImage?.url, null, 2));
    const scrollImages = pictureGroup['main-scroll'] ?? [];
    console.log('scrollImages:', JSON.stringify(scrollImages, null, 2));
    return (
        <>
            <div
                className='w-[100vw] h-[100vh] relative flex justify-center items-center bg-green-950 bg-gradient-to-b from-green-950 to-green-800'
                style={{ backgroundImage: `url(${heroImage?.url})` }}
            >
                <Image
                    // loader={() => heroImage.url}
                    sizes='(min-width: 768px) 100vw, 100vh'
                    fill
                    src={heroImage?.url}
                    alt={heroImage?.desc}
                    style={{ objectFit: 'cover' }}
                    className='h-[100vh] w-full object-cover absolute inset-0'
                    // loading='lazy'
                />
                <Heading
                    type='hero'
                    className='text-white drop-shadow-lg z-20 relative text-center select-none'
                    style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
                >
                    <span>Welcome to </span>
                    <span>San Antonio Korean School</span>
                </Heading>
            </div>
            <TopMain className='bg-lime-600 drop-shadow-lg'>
                <div className='container flex flex-1 flex-col items-center justify-center gap-4 relative p-4'>
                    <p className='max-w-[700px] text-white/90 text-sm lg:text-base/relaxed xl:text-xl/relaxed flex flex-col '>
                        {multiLineText(
                            `We value children's dreams 🛌 and love💖. 
                        Join our safe and happy learning environment!`,
                            true
                        )}
                    </p>
                </div>
            </TopMain>
            <ScrollingBar scrollImages={scrollImages} />
        </>
    );
}
