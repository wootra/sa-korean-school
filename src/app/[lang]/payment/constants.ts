import { PAYMENTS } from '@/config/registration';

export const paymentInfo = Object.freeze({
    [PAYMENTS.PREREG]: {
        title: 'Pre registered payment',
        desc: 'Payment for pre-registered parents',
        price: 160,
    },
    [PAYMENTS.NOREG]: {
        title: 'none-pre registered payment',
        desc: 'Payment for parents who did not pre-register',
        price: 250,
    },
    [PAYMENTS.DONATION]: {
        title: 'Donation',
        desc: "Donation for the children's education",
        price: 100,
    },
});
