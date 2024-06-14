import { auth } from '@/config/auth';
import { revalidatePath } from 'next/cache';
import { RedirectType, redirect } from 'next/navigation';
import SignIn from './SignIn';

const SignInPage = async ({ params }: { params: { lang: string } }) => {
	const session = await auth();

	if (session) {
		revalidatePath(`/${params.lang}/sign-in`);
		redirect(`/${params.lang}/profile`, RedirectType.replace);
	}

	return <SignIn />;
};

export default SignInPage;
