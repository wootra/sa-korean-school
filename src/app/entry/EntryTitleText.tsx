'use client';

import { useLang } from '@/providers';
import { Languages } from '@/lib/langs/types';
import React from 'react';
import { EntryTitles } from './consts';
import { multiLineTextIntoBlocks } from '@/lib/jsxUtils';

const EntryTitleText = ({
	titles,
}: {
	titles: Record<Languages, Record<EntryTitles, string>>;
}) => {
	const { language } = useLang();
	const title = titles[language] ?? titles.en;
	return <>{multiLineTextIntoBlocks(title.hero)}</>;
};

export default EntryTitleText;
