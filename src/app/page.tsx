import Image from 'next/image';
import TopMain from '@/layouts/TopMain';
import { Heading } from '@/entities';
import heroBack1 from '@/assets/hero-back/1.png';
import heroBack2 from '@/assets/hero-back/2.png';
import heroBack3 from '@/assets/hero-back/3.png';
import heroBack4 from '@/assets/hero-back/4.png';
import heroBack5 from '@/assets/hero-back/5.png';

export default function Home() {
    const images = [heroBack1, heroBack2, heroBack3, heroBack4, heroBack5];
    return (
        <>
            <div className='flex flex-col w-full h-[200px] overflow-x-clip py-4 '>
                <div className='flex flex-row flex-nowrap h-full gap-1 animate-scroll-x'>
                    {images.map((image, index) => (
                        <Image
                            src={image}
                            key={`image_${index}`}
                            alt='hero-back'
                            width='776'
                            height='471'
                            loading='lazy'
                            className='object-fill border-4 border-gray-200'
                        />
                    ))}
                    {images.map((image, index) => (
                        <Image
                            src={image}
                            key={`image_${index}_repeat`}
                            alt='hero-back'
                            width='776'
                            height='471'
                            loading='lazy'
                            className='object-fill'
                        />
                    ))}
                </div>
            </div>
            <TopMain>
                <div className='container flex flex-1 flex-col items-center justify-center gap-4 relative z-10'>
                    <Heading type='hero'>
                        <span>Welcome to </span>
                        <span>San Antonio Korean School</span>
                    </Heading>
                    <p className='max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                        We value children&apos;s dreams and love. We are
                        dedicated to providing a safe and happy learning
                        environment for our students.
                    </p>
                </div>
            </TopMain>
        </>
    );
}
