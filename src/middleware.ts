import { NextResponse } from 'next/server';
import { auth } from './config/auth';

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export default auth(req => {
	const reqUrl = new URL(req.url);
	if (!req.auth && reqUrl.pathname.includes('profile')) {
		return NextResponse.redirect(new URL('/entry', req.url));
	}
});
