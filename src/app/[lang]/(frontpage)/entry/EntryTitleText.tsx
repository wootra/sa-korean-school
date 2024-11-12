'use client';

import React from 'react';
import { multiLineTextIntoBlocks } from '@/lib/jsxUtils';
import { usePeekaboo } from 'peekaboo-store/react';
import { contentStore } from '@/components/store/contents';

const EntryTitleText = () => {
	const title = usePeekaboo(contentStore.data.entry.content.title.hero._boo);
	return <>{multiLineTextIntoBlocks(title)}</>;
};

export default EntryTitleText;
