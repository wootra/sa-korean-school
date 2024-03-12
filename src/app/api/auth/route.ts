import {
    getAuthInfoFromRequest,
    getUserInfo,
} from '@/lib/auth/server/getUserInfo';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
    const authInfo = await getAuthInfoFromRequest(req);
    const userInfo = await getUserInfo(authInfo);
    if (userInfo.email) {
        return userInfo;
    }
    throw new Error('No User');
}
