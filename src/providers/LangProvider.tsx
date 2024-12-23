'use client';

import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { Languages } from '@/lib/langs/types';
import { updatePeekaboo } from 'peekaboo-store/utils/update';
import { contentStore } from '@/components/store/contents';
import { PeekabooObjSourceData } from 'peekaboo-store';
const LangContext = React.createContext<{
	language: Languages;
	setLanguage: (fn: (lang: Languages) => Languages) => void;
}>({
	language: 'en',
	setLanguage: (fn: (lang: Languages) => Languages) => {
		return;
	},
});

const getLanguage = (language: Languages | undefined): Languages => {
	if (language) return language;
	else if (typeof window !== 'undefined' && window.sessionStorage.getItem('language')) {
		return (window.sessionStorage.getItem('language') as Languages | undefined) ?? 'en';
	}

	return 'en';
};

export const LangProvider = ({ language, children }: PropsWithChildren<{ language: Languages | undefined }>) => {
	const [lang, setLang] = useState(getLanguage(language));

	const setLanguage = useCallback(
		async (fn: (lang: Languages) => Languages) => {
			const langCode = fn(lang);

			const res = await fetch(`/api/content/${langCode}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const initData = (await res.json()) as Record<string, any>;
			updatePeekaboo(contentStore, initData as Partial<PeekabooObjSourceData<typeof contentStore>>);
			setLang(fn);
		},
		[lang]
	);
	useEffect(() => {
		sessionStorage.setItem('language', lang);
		setLanguage(() => lang);
	}, [lang, setLanguage]);

	return <LangContext.Provider value={{ language: lang, setLanguage }}>{children}</LangContext.Provider>;
};

export const useLang = () => React.useContext(LangContext);
