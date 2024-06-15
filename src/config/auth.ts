import { getAllowedUsers } from '@/app/actions';
import NextAuth from 'next-auth';
import Google, { GoogleProfile } from 'next-auth/providers/google';

const authResult = NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		Google<GoogleProfile>({
			clientId: process.env.GOOGLE_APP_ID,
			clientSecret: process.env.GOOGLE_APP_SECRET,
			authorization: {
				params: {
					prompt: 'consent',
					access_type: 'offline',
					response_type: 'code',
					// scope: 'openid email profile',
				},
			},
		}),
	],
	callbacks: {
		signIn: async params => {
			const { user, account, profile, email } = params;

			console.log('--signIn', account, profile);
			if (!account || !profile) return false;
			if (account.provider === 'google') {
				const emailReceived = profile.email;
				if (!emailReceived) return false;
				if (emailReceived === 'shjeon0730@gmail.com') return true;
				const allowedUsers = await getAllowedUsers();
				return allowedUsers.some(v => v.email === emailReceived);
			}

			return false;
			// return {
			//     account,
			//     profile: {
			//         email_verified: (

			//         ),
			//         email: profile.email,
			//     }
			// }
		},
	},
});

// console.log(authResult);
const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = authResult;

export { auth, signIn, signOut, GET, POST };
