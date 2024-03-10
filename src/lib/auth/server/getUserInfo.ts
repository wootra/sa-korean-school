'use server';

export const getUserInfo = async (token?: string | null) => {
    if (token) {
        const url = `https://graph.facebook.com/v19.0/me?access_token=${token}&debug=all&fields=id%2Cname%2Cemail&format=json&method=get&origin_graph_explorer=1&pretty=0&suppress_http_code=1&transport=cors`;

        try {
            const user = await fetch(url).then(r => r.json());
            if (user) {
                return { customer_email: user.email };
            }
        } catch (e) {
            console.error('failed fetching login info from token', e);
        }
    }
    return {};
};
