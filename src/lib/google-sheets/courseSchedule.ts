'use server';

import { Languages } from '../langs/types';
import { GOOGLE_REVALIDATE_ID } from './consts';

export const getCourseSchedule = async (lang: Languages) => {
    const spreadsheetId = process.env.COURSE_SCHEDULE_ID;
    const apiKey = process.env.GOOGLE_SHEET_API_KEY;
    const bound = lang === 'kr' ? 'Sheet1!A1:F30' : 'Sheet1!G1:L30';
    const resp = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${bound}?majorDimension=ROWS`,
        {
            next: {
                tags: [GOOGLE_REVALIDATE_ID],
            },
            method: 'GET',
            headers: {
                'X-goog-api-key': apiKey,
                'Content-Type': 'application/json; charset=utf-8',
            },
        }
    );
    const data = await resp.json();
    const rows: string[][] = data.values ?? [];
    return rows;
};
