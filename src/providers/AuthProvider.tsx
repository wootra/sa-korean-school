'use client';

import React, { PropsWithChildren } from 'react';
import { Suspense } from 'react';
import { SessionProvider } from 'next-auth/react';
import Script from 'next/script';
import { Session } from 'next-auth';

const AuthProvider = ({
	children,
	session,
}: PropsWithChildren<{ session: Session | null }>) => {
	return (
		<SessionProvider session={session}>
			{/* <AuthProvider> */}
			<Suspense fallback={<div>loading...</div>}>{children}</Suspense>
			{/* </AuthProvider> */}
			<Script
				async
				defer
				crossOrigin='anonymous'
				src='https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v19.0&appId=420879180505137'
				nonce='VbxLOlga'
			/>
		</SessionProvider>
	);
};

export default AuthProvider;
