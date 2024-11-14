'use client';

import { PropsWithChildren } from 'react';
import { updatePeekaboo } from 'peekaboo-store/utils/update';
import { contentStore } from '@/components/store/contents';

export const ContentLoader = ({ initContent }: PropsWithChildren<{ initContent?: object }>) => {
	if (initContent) {
		updatePeekaboo(contentStore, initContent);
	}
	return null;
};
