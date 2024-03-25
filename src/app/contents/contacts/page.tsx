import { Heading } from '@/entities';
import CenterMain from '@/layouts/CenterMain';
import Contacts from '@/widgets/Footer/Contacts';
import React from 'react';
import Enterance from './Enterance';
const ContactsPage = () => {
    return (
        <CenterMain>
            <div className='flex flex-col w-full max-w-[640px] justify-start items-start p-2'>
                <Heading type='page'>Contacts</Heading>
                <Contacts withHeading={false} className='gap-2' />
                <Enterance />
            </div>
        </CenterMain>
    );
};

export default ContactsPage;
