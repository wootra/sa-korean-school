import React from 'react';
import ManageAllowedEmails from './ManageAllowedEmails';
import { getAllowedUsers } from '@/app/actions';
import CommonContainer from '../../CommonContainer';

const ProfileUsersPage = async ({ params }: { params: { lang: string } }) => {
	const initData = await getAllowedUsers();
	const converted = initData.map(u => ({
		...u,
		createdAt: new Date(u.createdAt).toISOString(),
	}));
	return (
		<CommonContainer title='Manage Allowed Emails'>
			<ManageAllowedEmails lang={params.lang} initData={converted} />
		</CommonContainer>
	);
};

export default ProfileUsersPage;
