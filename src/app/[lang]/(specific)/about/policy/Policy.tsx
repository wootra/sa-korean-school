'use client';

import { Heading } from '@/entities';
import { multiLineText } from '@/lib/jsxUtils';
import React from 'react';
import InfoSection from '../InfoSection';
import { usePeekaboo } from 'peekaboo-store/react';
import { contentStore } from '@/components/store/contents';

const Policy = ({ policyInfo }: { policyInfo: any }) => {
	const privacyPolicy = usePeekaboo(contentStore.data.about.privacyPolicy.content._boo);
	return (
		<div className='flex flex-col max-w-[640px] w-full mx-auto gap-4 px-4'>
			<Heading type='page'>{privacyPolicy.heading}</Heading>
			<InfoSection>{multiLineText(privacyPolicy.description, false)}</InfoSection>
		</div>
	);
};

export default Policy;
