import { Languages } from '@/lib/langs/types';

const navs = Object.freeze({
	logo: 'San Antonio\nKorean School',
	home: 'Home',
	about: 'About',
	courses: 'Courses',
	events: 'Events',
	payment: 'Payment',
	contacts: 'Contacts',
});

export type Navs = keyof typeof navs;

export const NAVS: Record<Languages, Record<Navs, string>> = {
	kr: {
		logo: '샌안토니오\n한국학교',
		home: '홈',
		about: '소개',
		courses: '교육과정',
		events: '행사정보',
		payment: '결제정보',
		contacts: '연락처',
	},
	en: navs,
};
