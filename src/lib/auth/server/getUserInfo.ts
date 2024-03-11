'use server';

import { NextRequest } from 'next/server';
import { AuthInfo, FacebookUser, ServerUser } from './types';
import { AuthProviders } from '../types';

const getUserInfoForFacebook = async (
    token?: string | null
): Promise<ServerUser> => {
    if (token) {
        const url = `https://graph.facebook.com/v19.0/me?access_token=${token}&debug=all&fields=id%2Cname%2Cemail&format=json&method=get&origin_graph_explorer=1&pretty=0&suppress_http_code=1&transport=cors`;

        try {
            const user: FacebookUser | undefined = await fetch(url).then(r =>
                r.json()
            );
            if (user) {
                return {
                    email: user.email,
                    token: user.token,
                    id: user.id,
                    provider: 'facebook',
                };
            }
        } catch (e) {
            console.error('failed fetching login info from token', e);
        }
    }
    return {} as ServerUser;
};

export const getAuthInfoFromRequest = async (req: NextRequest) => {
    const body = await req.formData();
    return getAuthInfoInfo(body);
};

export const getAuthInfoInfo = async (body: FormData) => {
    const token = body.get('token') as string | null;
    const provider = body.get('provider') as AuthProviders | null;
    return { token, provider } as AuthInfo;
};

export const getUserInfo = async ({
    token,
    provider,
}: AuthInfo): Promise<ServerUser> => {
    if (provider === 'facebook') {
        return getUserInfoForFacebook(token);
    }
    return {} as ServerUser;
};
