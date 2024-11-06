'use server';

import { convertImageUrlFromGoogleDrive } from '../routes/convertUrlFromGoogleDrive';
import { GOOGLE_REVALIDATE_ID, REVALIDATE_DURATION_IN_SECONDS } from './consts';

export async function getEntryImages() {
	const spreadsheetId = process.env.HERO_PICTURES_ID;
	const apiKey = process.env.GOOGLE_SHEET_API_KEY;
	const bound = 'Sheet1!A2:C100';
	const resp = await fetch(
		`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${bound}?majorDimension=ROWS`,
		{
			next: {
				tags: [GOOGLE_REVALIDATE_ID],
				revalidate: REVALIDATE_DURATION_IN_SECONDS,
			},
			method: 'GET',
			headers: {
				'X-goog-api-key': apiKey,
				'Content-Type': 'application/json; charset=utf-8',
			},
		}
	);
	const data = await resp.json();
	const rows: string[][] = data.values ?? []; //[0].values ?? [];
	const pictureGroup = rows.reduce((obj, row) => {
		const classGroup = row[0].replaceAll('\b', '');
		const desc = row[1] ?? 'TBD';
		const url = row[2] ?? 'TBD';
		if (classGroup) {
			if (!obj[classGroup]) {
				obj[classGroup] = [];
			}
			const size = classGroup === 'main-hero' ? 1440 : 640;
			obj[classGroup].push({
				desc,
				url: convertImageUrlFromGoogleDrive(url, size),
			});
		}
		return obj;
	}, {} as Record<string, { desc: string; url: string }[]>);

	return pictureGroup as Record<string, { desc: string; url: string }[]>;
}
