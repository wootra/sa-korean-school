'use client';

import { Heading } from '@/entities';
import { multiLineText } from '@/lib/jsxUtils';
import React from 'react';
import { Languages } from '@/lib/langs/types';
import InfoSection from './InfoSection';
import { usePeekaboo } from 'peekaboo-store/react';
import { contentStore } from '@/components/store/contents';

const AboutIntro = ({ lang }: { lang: Languages }) => {
	// const doc = docs[lang] ?? docs.en;
	// const intro = introductions[lang] ?? introductions.en;
	const intro = usePeekaboo(contentStore.data.about.introduction._boo);
	const orders = intro.orders;
	return (
		<div className='flex flex-col max-w-[640px] w-full mx-auto gap-4 px-4'>
			<Heading type='page'>{intro.heading}</Heading>
			<InfoSection>{multiLineText(intro.description, false)}</InfoSection>
			<InfoSection type={2}>{intro.info}</InfoSection>
			{orders.map(key => {
				const item = intro.content[key];
				return (
					<section key={key} className='text-sm text-left'>
						<div className='flex flex-row gap-2 justify-start items-center py-2'>
							<Heading type='subheader'>{item.title}</Heading>
							{item.value && `: ${JSON.stringify(item.value)}`}
						</div>
						{item.desc && <p className='py-2'>{`${item.desc}`}</p>}
						{item.orders &&
							item.orders.map(cKey => {
								const child = (item.content as any)[cKey] as any;
								return (
									<ol key={cKey}>
										<li className='list-disc'>
											<span>
												{child.title && `${child.title}`}
												{child.title && ': '}
												{child.value && `${child.value}`}
											</span>
											{child.desc && <p>{`${child.desc}`}</p>}
										</li>
									</ol>
								);
							})}
					</section>
				);
			})}
			<section>{``}</section>
		</div>
	);
};

export default AboutIntro;
