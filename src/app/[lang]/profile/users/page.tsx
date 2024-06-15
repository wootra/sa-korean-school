import React from 'react';
import ManageAllowedEmails from './ManageAllowedEmails';
import { getAllowedUsers } from '@/app/actions';

const ProfileUsersPage = async ({ params }: { params: { lang: string } }) => {
	const initData = await getAllowedUsers();
	const converted = initData.map(u => ({
		...u,
		createdAt: new Date(u.createdAt).toISOString(),
	}));
	return <ManageAllowedEmails lang={params.lang} initData={converted} />;
};

export default ProfileUsersPage;
