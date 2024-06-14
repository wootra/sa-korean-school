'use client';

import React from 'react';
import SignIn from './SignIn';
import Profile from './Profile';
import { useSession } from 'next-auth/react';

const ProfilePage = () => {
	const sessionInfo = useSession();
	if (sessionInfo.status !== 'authenticated') {
		return <SignIn />;
	}
	const session = sessionInfo.data;
	const { user, expires } = session;
	console.log('expires at :', expires);
	if (!user?.email) {
		return <SignIn />;
	}
	return user ? <Profile session={session} /> : <SignIn />;
};

export default ProfilePage;
