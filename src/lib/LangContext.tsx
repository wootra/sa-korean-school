'use client';

import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Languages } from '@/lib/langs/types';

const LangContext = React.createContext<{
    language: Languages;
    setLanguage: React.Dispatch<React.SetStateAction<Languages>>;
}>({
    language: 'kr',
    setLanguage: ((lang: Languages) => {}) as React.Dispatch<
        React.SetStateAction<Languages>
    >,
});

const getLanguage = (language: Languages | undefined): Languages => {
    if (language) return language;
    else if (
        typeof window !== 'undefined' &&
        window.sessionStorage.getItem('language')
    ) {
        return (
            (window.sessionStorage.getItem('language') as
                | Languages
                | undefined) ?? 'en'
        );
    }

    return 'en';
};

export const LangProvider = ({
    language,
    children,
}: PropsWithChildren<{ language: Languages | undefined }>) => {
    const [lang, setLang] = useState(getLanguage(language));
    useEffect(() => {
        sessionStorage.setItem('language', lang);
    }, [lang]);
    return (
        <LangContext.Provider value={{ language: lang, setLanguage: setLang }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => React.useContext(LangContext);
