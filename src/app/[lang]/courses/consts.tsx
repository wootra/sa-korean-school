import { SubNavInfo } from '@/entities/SubNav';
import { Languages } from '@/lib/langs/types';

export const COURSES_PAGES = ['introduction', 'schedule'] as const;
export type AboutPage = (typeof COURSES_PAGES)[number];
const enCourseTitles = Object.freeze({
    introduction: 'Introduction',
    schedule: 'Schedule',
    titleTable: 'Time Table',
});

type CourseTitles = keyof typeof enCourseTitles;

export const courseTitles: Record<Languages, Record<CourseTitles, string>> = {
    kr: {
        introduction: '과정 소개',
        schedule: '학사 일정',
        titleTable: '시간표',
    },
    en: enCourseTitles,
};
export const COURSES_LIST: SubNavInfo<CourseTitles>[] = [
    {
        title: 'introduction',
        href: '/[lang]/courses',
        exact: true,
    },
    {
        title: 'schedule',
        href: '/[lang]/courses/schedule',
    },
    {
        title: 'titleTable',
        href: '/[lang]/courses/time-table',
    },
] as const;
