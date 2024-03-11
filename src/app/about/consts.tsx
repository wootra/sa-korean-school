import { SubNavInfo } from '@/entities/SubNav';

export const ABOUT_PAGES = ['introduction', 'schedule'] as const;
export type AboutPage = (typeof ABOUT_PAGES)[number];

export const ABOUT_LIST: SubNavInfo[] = [
    {
        title: '학교 소개',
        href: '/about',
        exact: true,
    },
    {
        title: '학사 일정',
        href: '/about/schedule',
    },
] as const;
