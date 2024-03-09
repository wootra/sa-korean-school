'use server';

import Image from 'next/image';
import TopMain from '@/layouts/TopMain';

export default async function Home() {
    return (
        <TopMain>
            <div className='container flex flex-1 flex-col items-center justify-center gap-4 relative z-10'>
                <Image
                    src='/hero-back.png'
                    alt='hero-back'
                    width='776'
                    height='471'
                    className='left-0 top-0 w-full h-full z-[-1] object-cover bg-red'
                />
                <h1 className='text-[clamp(1.5rem,4vw,3rem)] font-bold flex flex-col'>
                    <span>Welcome to </span>
                    <span>San Antonio Korean School</span>
                </h1>
                <p className='max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                    We value children's dreams and love. We are dedicated to
                    providing a safe and happy learning environment for our
                    students.
                </p>
            </div>
        </TopMain>
    );
}
