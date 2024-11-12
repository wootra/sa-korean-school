'use client';

import { multiLineText } from '@/lib/jsxUtils';
import { usePeekaboo } from 'peekaboo-store/react';
import { contentStore } from '@/components/store/contents';

const EntryHeroDesc = () => {
	const desc = usePeekaboo(contentStore.data.entry.content.title.heroDesc._boo);
	return <>{multiLineText(desc, true)}</>;
};

export default EntryHeroDesc;
