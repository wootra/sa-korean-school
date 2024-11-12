'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { deleteUser, insertUser } from '@/app/actions';

// export const dynamic = true;

type UserInfo = { email: string; name: string; createdAt: string };

function ManageAllowedEmails({
	initData,
}: {
	lang: string;
	initData: UserInfo[];
}) {
	const [users, setUsers] = useState<UserInfo[]>(initData);

	return (
		<div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
			<AddUserForm users={users} setUsers={setUsers} />
			<AddedUsers users={users} setUsers={setUsers} />
		</div>
	);
}

export default ManageAllowedEmails;

const AddUserForm = ({
	users,
	setUsers,
}: {
	users: UserInfo[];
	setUsers: Dispatch<SetStateAction<UserInfo[]>>;
}) => {
	const [newEmail, setNewEmail] = useState('');
	const [newName, setNewName] = useState('');

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
	const onAddEmail = async () => {
		if (!isAddPending) {
			addEmailAction();
		}
	};

	return (
		<div className='mb-4 flex flex-row'>
			<div className='flex flex-row gap-2'>
				<div className='grid grid-flow-row h-full gap-2'>
					<input
						type='email'
						value={newEmail}
						onChange={e => setNewEmail(e.target.value)}
						placeholder='Enter email'
						className='w-full p-2 border border-gray-300 rounded'
					/>
					<input
						type='text'
						value={newName}
						onChange={e => setNewName(e.target.value)}
						placeholder='Enter name'
						className='w-full p-2 border border-gray-300 rounded'
					/>
				</div>
				<button
					onClick={onAddEmail}
					className='flex-grow-0 flex-shrink-0 bg-blue-500 text-white p-2 rounded h-full'
				>
					Add Email
				</button>
			</div>

			{isAddingError && (
				<p className='text-red-500'>Error while adding user</p>
			)}
		</div>
	);
};
const AddedUsers = ({
	users,
	setUsers,
}: {
	users: UserInfo[];
	setUsers: Dispatch<SetStateAction<UserInfo[]>>;
}) => {
	const [deletingEmail, setDeletingEmail] = useState('');
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

	const deleteEmail = async (email: string) => {
		if (!isDeleting) {
			setDeletingEmail(email);
			deleteUserAction();
		}
	};

	return (
		<>
			{isDeleteError && (
				<p className='text-red-500'>Error while deleting user</p>
			)}
			<ul className='flex flex-col'>
				<li className='justify-between flex-row items-center p-2 border-b border-gray-200'>
					<div>
						<p className='font-semibold'>admin</p>
						<p className='text-gray-600'>shjeon0730@gmail.com</p>
					</div>
				</li>
				{users.map(d => (
					<li
						key={d.email}
						className='flex flex-row justify-between items-center p-2 border-b border-gray-200'
					>
						<div>
							<div>
								<p className='font-semibold'>{d.name}</p>
								<p className='text-gray-600'>{d.email}</p>
							</div>
							<p className='text-gray-400 text-sm'>
								{d.createdAt}
							</p>
						</div>
						<button
							disabled={isDeleting}
							onClick={() => deleteEmail(d.email)}
							className='bg-red-500 text-white p-2 rounded flex-grow-0 flex-shrink-0'
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	);
};
