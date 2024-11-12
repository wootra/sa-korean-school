'use client';

import { Heading } from '@/entities';
import CenterMain from '@/layouts/CenterMain';
import Contacts from '@/widgets/Footer/Contacts';
import React from 'react';
import Enterance from './Enterance';
import { Languages } from '@/lib/langs/types';
import { usePeekaboo } from 'peekaboo-store/react';
import BackHeader from '@/entities/BackHeader';
import { contentStore } from '@/components/store/contents';
type Props = {
	params: {
		lang: Languages;
	};
};

const ContactsPage = ({ params: { lang } }: Props) => {
	const contacts = usePeekaboo(contentStore.data.contacts.content._boo);

	return (
		<CenterMain>
			<div className='flex flex-col w-full max-w-[640px] justify-start items-start p-2'>
				<Heading type='page'>{contacts.title.contacts}</Heading>
				<Contacts withHeading={false} className='gap-2' title={contacts.title.contacts} />
				<Enterance title={contacts.title.enterance} />
			</div>
			<BackHeader>{contacts.backDrop}</BackHeader>
		</CenterMain>
	);
};

export default ContactsPage;
