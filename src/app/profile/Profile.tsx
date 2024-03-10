/**
 * v0 by Vercel.
 * @see https://v0.dev/t/E4fQKbxIrTK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Profile() {
    return (
        <div className='w-full py-12'>
            <div className='container space-y-12'>
                <div className='space-y-2 text-center'>
                    <h1 className='text-4xl font-bold'>Create an account</h1>
                    <p className='text-gray-500 dark:text-gray-400'>
                        Already have an account?
                        <Link className='underline' href='#'>
                            Sign in
                        </Link>
                    </p>
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
                        Sign up
                    </Button>
                </div>
            </div>
        </div>
    );
}
