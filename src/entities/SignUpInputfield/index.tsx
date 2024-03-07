import React from 'react';
import Text from '../Text';
import Input from '../Input';
import Image from 'next/image';

interface Props {
    className?: string;
    email?: string;
}

export default function SignUpInputfield({ email = 'Email', ...props }: Props) {
    return (
        <div {...props}>
            <div className='flex flex-row justify-start w-[12%]'>
                <div className='flex flex-row justify-start w-full'>
                    <Text
                        size='s'
                        as='p'
                        className='!text-gray-900 !font-medium'
                    >
                        {email}
                    </Text>
                </div>
            </div>
            <Input
                color='white_A700'
                size='xs'
                name='email'
                placeholder='user@example.com'
                prefix={
                    <Image
                        src='images/defaultNoData.png'
                        alt='message / 24 / Outline'
                    />
                }
                className='w-full gap-[15px] rounded-tr-[10px] rounded-br-[10px] border-gray-300 border border-solid'
            />
        </div>
    );
}
