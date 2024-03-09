import { SmileIcon } from '@/entities';

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XAh9SvqDIo8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function UnderConstruction() {
    return (
        <div className='flex items-center justify-center w-full min-h-[80vh] flex-col space-y-2'>
            <div className='flex items-center space-x-2'>
                <SmileIcon className='w-8 h-8' />
                <h1 className='text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl'>
                    Under Construction
                </h1>
            </div>
            <p className='mx-auto max-w-[600px] text-center text-gray-500 md:text-xl dark:text-gray-400'>
                We are currently working on this website and will be back soon.
            </p>
        </div>
    );
}
