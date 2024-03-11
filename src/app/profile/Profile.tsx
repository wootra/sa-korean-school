'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import SignOutButton from './SignOutButton';
import { User } from '@/lib/auth/client/types';

export default function Profile({ user }: { user: User }) {
    return (
        <div className='w-full py-12'>
            <div className='container space-y-12'>
                <div className='space-y-2 text-center'>
                    <h1 className='text-4xl font-bold'>User Profile</h1>
                </div>
                <div className='mx-auto max-w-[400px] space-y-4'>
                    <div className='space-y-2'>
                        <Label htmlFor='email'>Email</Label>
                        <Input
                            id='email'
                            placeholder='m@example.com'
                            value={user.email}
                            disabled
                            required
                            type='email'
                        />
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor='student_name'>{`Student's name`}</Label>
                        <Input id='student_name' required type='text' />
                    </div>
                    <SignOutButton />
                </div>
            </div>
        </div>
    );
}
