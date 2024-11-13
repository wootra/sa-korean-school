import React from 'react';
import Profile from './Profile';
import { RedirectType, redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';

const ProfilePage = async ({ params }: { params: { lang: string } }) => {
	const session = await getServerSession();
	const { lang = 'en' } = params ?? {};
	if (!session) {
		revalidatePath(`/${lang}/profile`);
		redirect(`/${lang}/sign-in`, RedirectType.replace);
	}
	// if (!session) {
	// 	return <>not login</>;
	// }
	return <Profile session={session} lang={lang} />;
};

export default ProfilePage;
