import { Languages } from '@/lib/langs/types';

const enTitles = Object.freeze({
	hero: `Welcome to\nSan Antonio Korean School`,
	heroDesc: `We value children's dreams 🛌 and love💖.
    Join our safe and happy learning environment!`,
});

export type EntryTitles = keyof typeof enTitles;

export const ENTRY_TITLES: Record<Languages, Record<EntryTitles, string>> = {
	kr: {
		hero: `샌안토니오 한국학교에\n오신 것을 환영합니다!`,
		heroDesc: `샌안토니오 한국학교는 행복하고 안전한 교육환경에서 
    아이들의 꿈과 🛌 사랑을 💖 키워 줍니다.`,
	},
	en: enTitles,
};

export const ScrollProps = Object.freeze({
	pictureWidth: 265,
	pictureHeight: 161,
	secPerPic: 5,
});
