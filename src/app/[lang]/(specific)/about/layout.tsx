import React from 'react';
import FullWidth from '@/layouts/FullWidth';
import BackHeader from '@/entities/BackHeader';
import AboutSubNav from './AboutSubNav';

const layout = ({ children, params: { lang } }: { children: React.ReactNode; params: { lang: string } }) => {
	return (
		<FullWidth>
			<AboutSubNav lang={lang} />
			{children}
			<BackHeader>ABOUT US</BackHeader>
		</FullWidth>
	);
};

export default layout;
