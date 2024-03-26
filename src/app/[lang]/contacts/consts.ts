import { Languages } from '@/lib/langs/types';

const titles = Object.freeze({
    contacts: 'Contacts',
    enterance: 'Enterance',
});

type TitleKeys = keyof typeof titles;
export const TITLES: Record<Languages, Record<TitleKeys, string>> = {
    kr: {
        contacts: '연락처',
        enterance: '학교 입구',
    },
    en: titles,
};
