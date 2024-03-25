'use client';

import React, { PropsWithChildren } from 'react';
import { Languages } from '@/lib/langs/types';

const LangContext = React.createContext<{
    language: Languages;
}>({ language: 'kr' });

export const LangProvider = ({
    language,
    children,
}: PropsWithChildren<{ language: Languages }>) => {
    return (
        <LangContext.Provider value={{ language }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => React.useContext(LangContext);
