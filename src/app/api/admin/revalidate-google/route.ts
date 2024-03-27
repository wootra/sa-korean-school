'use server';

import { revalidateGoogleSheets } from '@/lib/google-sheets/revalidate';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, _res: NextResponse<{}>) {
    revalidateGoogleSheets();
    return NextResponse.json({ message: 'ok' });
}
