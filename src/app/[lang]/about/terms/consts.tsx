import { Languages } from '@/lib/langs/types';

export const ABOUT_PAGES = ['introduction', 'schedule'] as const;
export type AboutPage = (typeof ABOUT_PAGES)[number];

export const privacyPolicy: Record<
    Languages,
    { heading: string; description: string }
> = {
    en: {
        heading: 'Terms of Service',
        description: `San Antonio Korean School Homepage only allows internal user(administrators, homepage managers, school relative workers) to log in. All information except for management pages are open to public.`,
    },
    kr: {
        heading: '서비스 이용정책',
        description: `샌안토니오 한국학교 홈페이지는 학교 관계자(서비스 관리자, 홈페이지 관리자, 학교 관련 직원)의 로그인만 허용합니다.`,
    },
};
