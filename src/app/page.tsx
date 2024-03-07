'use server';

import Image from 'next/image';
import CenterMain from '@/layouts/CenterMain';
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
                <h1 className='text-4xl font-bold tracking-tighter sm:text-6xl'>
                    Welcome to San Antonio Korean School
                </h1>
                <p className='max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                    Where learning knows no bounds. Our mission is to provide
                    high-quality education to everyone, anywhere.
                </p>
            </div>
        </TopMain>
    );
}
