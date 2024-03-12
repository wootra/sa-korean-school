import { SubNavInfo } from '@/entities/SubNav';

export const COURSES_PAGES = ['introduction', 'schedule'] as const;
export type AboutPage = (typeof COURSES_PAGES)[number];

export const EVENT_LIST: SubNavInfo[] = [
    {
        title: '행사 일정',
        href: '/contents/events',
        exact: true,
    },
    {
        title: 'News',
        href: '/contents/events/news',
        notReady: true,
    },
] as const;
