import { Heading } from '@/entities';
import CenterMain from '@/layouts/CenterMain';
import Contacts from '@/widgets/Footer/Contacts';
import React from 'react';
import Enterance from './Enterance';
const ContactsPage = () => {
    return (
        <CenterMain>
            <div className='flex flex-col w-full mx-auto justify-start items-start'>
                <Heading type='page'>Contacts</Heading>
                <Contacts withHeading={false} className='gap-2' />
            </div>
            <Enterance />
        </CenterMain>
    );
};

export default ContactsPage;
