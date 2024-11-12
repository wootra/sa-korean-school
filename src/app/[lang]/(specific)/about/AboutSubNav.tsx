'use client';

import SubNav, { SubNavInfo } from '@/entities/SubNav';
import React from 'react';
import { convertNavList } from '@/lib/langs/convertNavList';
import { contentStore } from '@/components/store/contents';
import { usePeekaboo } from 'peekaboo-store/react';

const AboutSubNav = ({ lang }: { lang: string }) => {
	const about = usePeekaboo(contentStore.data.about._boo);
	const order = about.list.order;

	const listsSrc = about.list;

	const list = order.map(listId => listsSrc[listId as keyof Omit<typeof listsSrc, 'order'>]);
	const convertedNavList = convertNavList(list, lang) as SubNavInfo[];
	return <SubNav navList={convertedNavList} />;
};

export default AboutSubNav;
