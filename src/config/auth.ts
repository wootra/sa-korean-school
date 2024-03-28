import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_APP_ID,
            clientSecret: process.env.GOOGLE_APP_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
    ],
});
