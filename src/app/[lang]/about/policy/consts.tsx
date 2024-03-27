import { Languages } from '@/lib/langs/types';

export const ABOUT_PAGES = ['introduction', 'schedule'] as const;
export type AboutPage = (typeof ABOUT_PAGES)[number];

export const privacyPolicy: Record<
    Languages,
    { heading: string; description: string }
> = {
    en: {
        heading: 'Privacy Policy',
        description: `San Antonio Korean School Homepage does not collect or save personal information except for an email address.`,
    },
    kr: {
        heading: '개인정보 취급 정책',
        description: `샌안토니오 한국학교 홈페이지는 이메일 주소를 제외한 개인정보도 수집/저장하지 않습니다.`,
    },
};
