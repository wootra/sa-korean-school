import { SubNavInfo } from '@/entities/SubNav';

export const ABOUT_PAGES = ['introduction', 'schedule'] as const;
export type AboutPage = (typeof ABOUT_PAGES)[number];

export const ABOUT_LIST: SubNavInfo[] = [
    {
        title: '학교 소개',
        href: '/[lang]/about',
        exact: true,
    },
    {
        title: '학교장/이사장 인사',
        href: '/[lang]/about/greetings',
        notReady: true,
    },
] as const;
