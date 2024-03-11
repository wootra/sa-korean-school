import { PAYMENTS } from '@/config/registration';
import {
    getAuthInfoFromRequest,
    getUserInfo,
} from '@/lib/auth/server/getUserInfo';
import { NextRequest, NextResponse } from 'next/server';

const classCodes = Object.freeze({
    [PAYMENTS.PREREG]: process.env.PREREGISTER_CLASS_PRICE,
    [PAYMENTS.NOREG]: process.env.NOREGISTER_CLASS_PRICE,
});

export async function POST(req: NextRequest, res: NextResponse) {
    const authInfo = await getAuthInfoFromRequest(req);
    const userInfo = await getUserInfo(authInfo);
    if (userInfo.email) {
        return userInfo;
    }
    throw new Error('No User');
}
