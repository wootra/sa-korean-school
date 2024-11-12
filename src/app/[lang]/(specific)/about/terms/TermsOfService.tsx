'use client';

import { Heading } from '@/entities';
import { multiLineText } from '@/lib/jsxUtils';
import React from 'react';
import { Languages } from '@/lib/langs/types';
import InfoSection from '../InfoSection';
import { usePeekaboo } from 'peekaboo-store/react';
import { contentStore } from '@/components/store/contents';

const TermsOfService = ({ lang }: { lang: Languages }) => {
	const termsOfService = usePeekaboo(contentStore.data.about.termsOfService.content._boo); // privacyPolicy[lang] ?? privacyPolicy.en;
	console.log('termsOfService', termsOfService);
	return (
		<div className='flex flex-col max-w-[640px] w-full mx-auto gap-4 px-4'>
			<Heading type='page'>{termsOfService.heading}</Heading>
			<InfoSection>{multiLineText(termsOfService.description, false)}</InfoSection>
		</div>
	);
};

export default TermsOfService;
