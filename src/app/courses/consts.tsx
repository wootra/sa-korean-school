import { SubNavInfo } from '@/entities/SubNav';

export const COURSES_PAGES = ['introduction', 'schedule'] as const;
export type AboutPage = (typeof COURSES_PAGES)[number];

export const COURSES_LIST: SubNavInfo[] = [
    {
        title: '과정 소개',
        href: '/courses',
        exact: true,
    },
    {
        title: '학사 일정',
        href: '/courses/schedule',
    },
    {
        title: '시간표',
        href: '/courses/time-table',
    },
] as const;
