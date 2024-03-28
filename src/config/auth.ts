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
                    // scope: 'openid email profile',
                },
                callbacks: {
                    async signIn({
                        account,
                        profile,
                    }: {
                        account: any;
                        profile: { email_verified: boolean; email: string };
                    }) {
                        if (account.provider === 'google') {
                            return (
                                profile.email_verified &&
                                (profile.email.startsWith('sa.') ||
                                    profile.email.startsWith('ks.')) &&
                                profile.email.endsWith('@google.com')
                            );
                        }
                    },
                },
            },
        }),
    ],
});
