'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import SignOutButton from './SignOutButton';
import { Session } from 'next-auth';
import Link from 'next/link';
import Image from 'next/image';
import CommonContainer from '../CommonContainer';

export default function Profile({
	session,
	lang,
}: {
	session: Session;
	lang: string;
}) {
	return (
		<CommonContainer title='My Profile'>
			<div className='text-xl font-bold text-gray-900'>
				{session.user?.name}
			</div>
			<p className='text-gray-500'>{session.user?.email}</p>
		</CommonContainer>
	);
}
