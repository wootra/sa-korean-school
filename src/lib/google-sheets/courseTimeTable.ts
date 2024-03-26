'use server';

import { Languages } from '../langs/types';
import { GOOGLE_REVALIDATE_ID, REVALIDATE_DURATION_IN_SECONDS } from './consts';

export const getCourseTimeTable = async (lang: Languages) => {
    const spreadsheetId = process.env.COURSE_TIMETABLE_ID;
    const apiKey = process.env.GOOGLE_SHEET_API_KEY;
    const bound = lang === 'kr' ? 'Sheet1!A1:C30' : 'Sheet1!D1:F30';
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
    const allRows: string[][] = data.values ?? [];
    const headerRow = allRows[0];
    const tableGroups = allRows.slice(1).reduce((obj, row) => {
        const classGroup = row[0];
        if (classGroup) {
            if (!obj[classGroup]) {
                obj[classGroup] = [];
            }
            obj[classGroup].push(row);
        }
        // row.values[0].formattedValue;
        return obj;
    }, {} as Record<string, (string | undefined)[][]>);

    return { tableGroups, headerRow };
};
