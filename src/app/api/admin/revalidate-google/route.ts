'use server';

import { GOOGLE_REVALIDATE_ID } from '@/lib/google-sheets/consts';
import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export default async function action() {}

export async function GET(req: NextRequest, _res: NextResponse<{}>) {
    revalidateTag(GOOGLE_REVALIDATE_ID);
    return NextResponse.json({ message: 'ok' });
}
