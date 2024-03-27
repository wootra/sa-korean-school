import { SubNavInfo } from '@/entities/SubNav';
import { Languages } from '@/lib/langs/types';

const enEventTitles = Object.freeze({
    schedule: 'Schedule',
    news: 'News',
});

type EventTitles = keyof typeof enEventTitles;

export const eventTitles: Record<Languages, Record<EventTitles, string>> = {
    kr: {
        schedule: '행사 일정',
        news: '새소식',
    },
    en: enEventTitles,
};

export const EVENT_LIST: SubNavInfo[] = [
    {
        title: 'schedule',
        href: '/[lang]/events',
        exact: true,
    },
    {
        title: 'news',
        href: '/[lang]/events/news',
        notReady: true,
    },
] as const;
