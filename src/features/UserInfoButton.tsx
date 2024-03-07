import { Button } from '@/components/ui/button';
import Image from 'next/image';

const UserInfoButton = () => {
    return (
        <Button
            className='rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800'
            size='icon'
            variant='outline'
        >
            <Image
                src='/images/img_profile_24_outline.svg'
                alt='profiletwentyfo'
                width='30'
                height='30'
            />
        </Button>
    );
};
export default UserInfoButton;
