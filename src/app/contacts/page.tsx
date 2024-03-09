import UnderConstruction from '@/features/UnderConstruction';
import CenterMain from '@/layouts/CenterMain';
import React from 'react';

const Contacts = () => {
    return (
        <CenterMain>
            <div className='mx-auto w-[600px] h-[450px] py-4'>
                <iframe
                    src='https://www.google.com/maps/embed?pb=!4v1710025477167!6m8!1m7!1s8nF4_3Pb_-DzH2_armqj4w!2m2!1d29.56817610023719!2d-98.47532390011177!3f134.72851357663603!4f-5.127441453511821!5f0.7820865974627469'
                    width='600'
                    height='450'
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
            </div>
        </CenterMain>
    );
};

export default Contacts;
