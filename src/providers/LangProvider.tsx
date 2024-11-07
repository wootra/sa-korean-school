'use client';

import React, { PropsWithChildren, useEffect, useLayoutEffect, useState } from 'react';
import { Languages } from '@/lib/langs/types';
import { updatePeekaboo } from 'peekaboo-store/utils/update';
import { contentStore } from '@/components/store/contents';
import { enContent } from './temp/enContent';
import { krContent } from './temp/krContent';
import { PeekabooObjSourceData } from 'peekaboo-store';
const LangContext = React.createContext<{
	language: Languages;
	setLanguage: React.Dispatch<React.SetStateAction<Languages>>;
}>({
	language: 'kr',
	setLanguage: ((lang: Languages) => {}) as React.Dispatch<React.SetStateAction<Languages>>,
});

const getLanguage = (language: Languages | undefined): Languages => {
	if (language) return language;
	else if (typeof window !== 'undefined' && window.sessionStorage.getItem('language')) {
		return (window.sessionStorage.getItem('language') as Languages | undefined) ?? 'en';
	}

	return 'en';
};

export const LangProvider = ({
	language,
	children,
	initContent,
}: PropsWithChildren<{ language: Languages | undefined; initContent: object }>) => {
	const [lang, setLang] = useState(getLanguage(language));
	useLayoutEffect(() => {
		sessionStorage.setItem('language', lang);
		const newContent = lang === 'en' ? enContent : krContent; // temporary content. should be changed to react query
		updatePeekaboo(contentStore, newContent as Partial<PeekabooObjSourceData<typeof contentStore>>);
	}, [lang]);
	useLayoutEffect(() => {
		if (initContent) {
			try {
				updatePeekaboo(contentStore, initContent as Partial<PeekabooObjSourceData<typeof contentStore>>);
			} catch (e) {
				console.log(e);
				console.error('initContent must be an object', initContent);
			}
		}
	}, [initContent]);
	return <LangContext.Provider value={{ language: lang, setLanguage: setLang }}>{children}</LangContext.Provider>;
};

export const useLang = () => React.useContext(LangContext);
