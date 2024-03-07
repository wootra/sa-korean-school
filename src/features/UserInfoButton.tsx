'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const UserInfoButton = () => {
    return (
        <form action='/api/auth/signIn?class' method='GET'>
            <Button
                type='submit'
                variant={'secondary'}
                role='button'
                className='rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800 p-0'
            >
                <Image
                    src='/images/img_profile_24_outline.svg'
                    alt='profiletwentyfo'
                    width='30'
                    height='30'
                />
            </Button>
        </form>
    );
};
export default UserInfoButton;
