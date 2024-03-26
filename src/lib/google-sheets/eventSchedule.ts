'use server';

import { Languages } from '../langs/types';
import { convertImageUrlFromGoogleDrive } from '../routes/convertUrlFromGoogleDrive';
import { GOOGLE_REVALIDATE_ID } from './consts';

export const getEventSchedule = async (lang: Languages) => {
    const spreadsheetId = process.env.ABOUT_EVENTS_ID;
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
    const allRows: string[][] = data.values ?? [];
    const headerRow = allRows[0];
    const tableGroups = allRows.slice(1).reduce((obj, row) => {
        const classGroup = row[0];
        if (classGroup) {
            if (!obj[classGroup]) {
                obj[classGroup] = [];
            }
            obj[classGroup].push(
                row.map((col, idx) => {
                    if (col && idx === 5) {
                        return convertImageUrlFromGoogleDrive(col, 320);
                    }
                    return col;
                })
            );
        }
        // row.values[0].formattedValue;
        return obj;
    }, {} as Record<string, (string | undefined)[][]>);

    return { tableGroups, headerRow };
};
