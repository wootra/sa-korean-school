'use server';

import { revalidateTag } from 'next/cache';
import { GOOGLE_REVALIDATE_ID } from './consts';

export const revalidateGoogleSheets = () => {
    revalidateTag(GOOGLE_REVALIDATE_ID);
};
