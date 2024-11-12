import React from 'react';
import CenterMain from '@/layouts/CenterMain';
import Policy from './Policy';
import { Languages } from '@/lib/langs/types';
import { contentStore } from '@/components/store/contents';

const PolicyPage = ({ params: { lang } }: { params: { lang: string } }) => {
	const policyInfo = contentStore.data.about.privacyPolicy.content._boo.get();

	return (
		<CenterMain className='my-4'>
			<Policy policyInfo={policyInfo} />
		</CenterMain>
	);
};

export default PolicyPage;
