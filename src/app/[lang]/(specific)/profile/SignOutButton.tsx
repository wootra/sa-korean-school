'use client';

import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

import React, { useCallback } from 'react';
import { useLang } from '@/providers';
import { useSession, signOut } from 'next-auth/react';

export default function SignOutButton() {
	const { data } = useSession();
	const { user } = data ?? {};
	const { language } = useLang();
	const signOutCb = useCallback(() => {
		if (user) {
			signOut();
		}
		redirect(`/${language}/profile`);
	}, [language, user]);
	return (
		<Button
			className='w-full'
			type='button'
			variant={'destructive'}
			onClick={signOutCb}
		>
			Sign Out
		</Button>
	);
}
