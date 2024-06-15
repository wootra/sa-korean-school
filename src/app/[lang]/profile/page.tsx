import React from 'react';
import Profile from './Profile';
import { auth } from '@/config/auth';
import { RedirectType, redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

const ProfilePage = async ({ params }: { params: { lang: string } }) => {
	const session = await auth();

	if (!session) {
		revalidatePath(`/${params.lang}/profile`);
		redirect(`/${params.lang}/sign-in`, RedirectType.replace);
	}
	const { lang } = params;
	return <Profile session={session} lang={lang} />;
};

export default ProfilePage;
