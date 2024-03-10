import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FlexCol from '@/layouts/FlexCol';
import FlexRow from '@/layouts/FlexRow';
import { LoginButton } from './LoginButton';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';

export default function SignIn() {
    return (
        <div className='w-full py-12'>
            <div className=''>
                <div className='space-y-2 text-center flex flex-col'>
                    <Image
                        alt='San Antonio Korean School logo'
                        className='rounded-full'
                        height='40'
                        src={logo}
                        style={{
                            aspectRatio: '40/40',
                            objectFit: 'cover',
                        }}
                        width='40'
                    />
                    <h1 className='text-4xl font-bold'>Sign In</h1>
                </div>
                <div className='mx-auto max-w-[400px] space-y-4'>
                    <div className='space-y-2'>
                        <Label htmlFor='email'>Email</Label>
                        <Input
                            id='email'
                            placeholder='m@example.com'
                            required
                            type='email'
                        />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor='password'>Password</Label>
                        <Input id='password' required type='password' />
                    </div>
                    <Button className='w-full' type='submit'>
                        Sign In
                    </Button>
                    <FlexCol
                        center
                        className='text-gray-500 dark:text-gray-400'
                    >
                        <p className='w-full text-center'>
                            Don't have an account?
                        </p>
                        <p className='w-full text-center text-nowrap flex-nowrap'>
                            Please request a new account with{' '}
                            <Link
                                href='mailto:sa.koreanschool@gmail.com'
                                className=''
                            >
                                administrator.
                            </Link>
                        </p>
                    </FlexCol>
                    <FlexCol
                        center
                        className='text-gray-500 dark:text-gray-400 border-t border-gray-300 py-2'
                    >
                        OR Sign in with
                    </FlexCol>
                    <FlexRow center>
                        <LoginButton />
                    </FlexRow>
                </div>
            </div>
        </div>
    );
}
