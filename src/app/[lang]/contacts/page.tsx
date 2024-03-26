import { Heading } from '@/entities';
import CenterMain from '@/layouts/CenterMain';
import Contacts from '@/widgets/Footer/Contacts';
import React from 'react';
import Enterance from './Enterance';
import { TITLES } from './consts';
import { Languages } from '@/lib/langs/types';
type Props = {
    params: {
        lang: Languages;
    };
};

const ContactsPage = ({ params: { lang } }: Props) => {
    const titles = TITLES[lang] ?? TITLES.en;

    return (
        <CenterMain>
            <div className='flex flex-col w-full max-w-[640px] justify-start items-start p-2'>
                <Heading type='page'>{titles.contacts}</Heading>
                <Contacts
                    withHeading={false}
                    className='gap-2'
                    title={titles.contacts}
                />
                <Enterance title={titles.enterance} />
            </div>
        </CenterMain>
    );
};

export default ContactsPage;
