import Image from 'next/image';
import TopMain from '@/layouts/TopMain';
import { Heading } from '@/entities';
import heroBack from './hero-back.png';

export default function Home() {
    return (
        <TopMain>
            <div className='container flex flex-1 flex-col items-center justify-center gap-4 relative z-10'>
                <Image
                    src={heroBack}
                    alt='hero-back'
                    width='776'
                    height='471'
                    loading='lazy'
                    className='left-0 top-0 w-full h-full z-[-1] object-cover bg-red'
                />
                <Heading type='hero'>
                    <span>Welcome to </span>
                    <span>San Antonio Korean School</span>
                </Heading>
                <p className='max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                    We value children&apos;s dreams and love. We are dedicated
                    to providing a safe and happy learning environment for our
                    students.
                </p>
            </div>
        </TopMain>
    );
}
