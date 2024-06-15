'use server';

import { allowedUserTable } from '@/schema';
import { db } from '@/db';
import { eq } from 'drizzle-orm';

export async function insertUser(email: string, name: string) {
	const ret: any = await db.insert(allowedUserTable).values({
		name,
		email,
	});
	return {
		name,
		email,
		createdAt: new Date().toISOString(),
	};
}

export async function getAllowedUsers(limit = 10) {
	return (await db.select().from(allowedUserTable).limit(limit)).map(v => ({
		...v,
		createdAt: new Date(v.createdAt).toISOString(),
	}));
}

export async function deleteUser(email: string) {
	const ret = await db
		.delete(allowedUserTable)
		.where(eq(allowedUserTable.email, email));
	return {
		result: 'ok',
	};
}

export async function isValidUser(email: string) {
	if (!email) return false;
	if (email === 'shjeon0730@gmail.com') return true;
	const allowedUsers = await getAllowedUsers();
	console.log('checking...', email, 'in', allowedUsers);
	return allowedUsers.some(v => v.email === email);
}

export type InsertUser = typeof insertUser;
export type GetAllowedUsers = typeof getAllowedUsers;
export type DeleteUser = typeof deleteUser;
