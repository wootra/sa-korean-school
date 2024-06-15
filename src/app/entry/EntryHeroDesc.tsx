'use client';

import { useLang } from '@/providers';
import { Languages } from '@/lib/langs/types';
import React from 'react';
import { EntryTitles } from './consts';
import { multiLineText } from '@/lib/jsxUtils';

const EntryHeroDesc = ({
	titles,
}: {
	titles: Record<Languages, Record<EntryTitles, string>>;
}) => {
	const { language } = useLang();
	const title = titles[language] ?? titles.en;
	return <>{multiLineText(title.heroDesc, true)}</>;
};

export default EntryHeroDesc;
