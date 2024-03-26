'use server';

import { Languages } from '../langs/types';
import { GOOGLE_REVALIDATE_ID, REVALIDATE_DURATION_IN_SECONDS } from './consts';

export const getCourseIntro = async (lang: Languages) => {
    const spreadsheetId = process.env.COURSE_INTRO_ID;
    const apiKey = process.env.GOOGLE_SHEET_API_KEY;
    const bound = lang === 'kr' ? 'Sheet1!A2:C30' : 'Sheet1!D2:F30';
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
    const rows: string[][] = data.values ?? [];
    return rows;
};
