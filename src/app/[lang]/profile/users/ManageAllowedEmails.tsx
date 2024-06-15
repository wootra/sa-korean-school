'use client';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { deleteUser, insertUser } from '@/app/actions';

export const dynamic = true;

type UserInfo = { email: string; name: string; createdAt: string };
type OrgUserInfo = UserInfo & { id: number };

function ManageAllowedEmails({
	initData,
}: {
	lang: string;
	initData: OrgUserInfo[];
}) {
	const [users, setUsers] = useState<UserInfo[]>(initData);
	const [newEmail, setNewEmail] = useState('');
	const [newName, setNewName] = useState('');
	const [deletingEmail, setDeletingEmail] = useState('');

	const {
		isPending: isAddPending,
		isError: isAddingError,
		mutate: addEmailAction,
	} = useMutation({
		mutationFn: async () => {
			try {
				return await insertUser(newEmail, newName);
			} catch (e) {
				console.log('error while inserting..', e);
				throw e;
			}
		},
		onSuccess: () => {
			try {
				setUsers([
					...users,
					{
						email: newEmail,
						name: newName,
						createdAt: new Date().toISOString(),
					},
				]);
				setNewEmail('');
				setNewName('');
			} catch (e) {
				console.log('error while handling success..', e);
				throw e;
			}
		},
		onError: e => {
			console.log('error while adding', e);
		},
	});

	const {
		isPending: isDeleting,
		isError: isDeleteError,
		mutate: deleteUserAction,
	} = useMutation({
		mutationFn: async () => {
			return await deleteUser(deletingEmail);
		},
		onSuccess: () => {
			setUsers(users.filter(u => u.email !== deletingEmail));
			setDeletingEmail('');
		},
		onError: e => {
			console.log('error while deleting...', e);
		},
	});

	const onAddEmail = async () => {
		if (!isAddPending) {
			addEmailAction();
		}
	};

	const deleteEmail = async (email: string) => {
		if (!isDeleting) {
			setDeletingEmail(email);
			deleteUserAction();
		}
	};

	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-100'>
			<div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
				<h1 className='text-2xl font-bold mb-4 text-center'>
					Manage Allowed Emails
				</h1>
				<div className='mb-4'>
					<input
						type='email'
						value={newEmail}
						onChange={e => setNewEmail(e.target.value)}
						placeholder='Enter email'
						className='w-full p-2 border border-gray-300 rounded mb-2'
					/>
					<input
						type='text'
						value={newName}
						onChange={e => setNewName(e.target.value)}
						placeholder='Enter name'
						className='w-full p-2 border border-gray-300 rounded mb-2'
					/>
					{isAddingError && (
						<p className='text-red-500'>Error while adding user</p>
					)}
					<button
						onClick={onAddEmail}
						className='w-full bg-blue-500 text-white p-2 rounded mt-2'
					>
						Add Email
					</button>
				</div>
				{isDeleteError && (
					<p className='text-red-500'>Error while deleting user</p>
				)}
				<ul>
					{users.map(d => (
						<li
							key={d.email}
							className='flex justify-between items-center p-2 border-b border-gray-200'
						>
							<div>
								<p className='font-semibold'>{d.name}</p>
								<p className='text-gray-600'>{d.email}</p>
								<p className='text-gray-400 text-sm'>
									{d.createdAt}
								</p>
							</div>
							<button
								disabled={isDeleting}
								onClick={() => deleteEmail(d.email)}
								className='bg-red-500 text-white p-2 rounded'
							>
								Delete
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default ManageAllowedEmails;
