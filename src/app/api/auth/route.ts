import {
    getAuthInfoFromRequest,
    getUserInfo,
} from '@/lib/auth/server/getUserInfo';
import { ServerUser } from '@/lib/auth/server/types';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, _res: NextResponse<ServerUser>) {
    const authInfo = await getAuthInfoFromRequest(req);
    const userInfo = await getUserInfo(authInfo);
    if (userInfo.email) {
        return NextResponse.json(userInfo);
    }
    console.error('no email found');
    return NextResponse.error();
}
