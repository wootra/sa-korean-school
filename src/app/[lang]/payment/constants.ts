import { PAYMENTS } from '@/config/registration';
import { SubNavInfo } from '@/entities/SubNav';
import { Languages } from '@/lib/langs/types';

export const paymentInfo = Object.freeze({
    [PAYMENTS.DEPOSIT]: {
        title: '2024 Autumn Semester Deposit',
        desc: 'Deposit for the class. This includes 3% as fee',
        price: 51.55,
    },
});

const enPaymentTitles = Object.freeze({
    transfer: 'Transfer',
    card: 'Credit Card',
});

type PaymentTitles = keyof typeof enPaymentTitles;

export const paymentTitles: Record<Languages, Record<PaymentTitles, string>> = {
    kr: {
        transfer: '이체',
        card: '카드 결제',
    },
    en: enPaymentTitles,
};

export const PAYMENT_LIST: SubNavInfo<PaymentTitles>[] = [
    {
        title: 'transfer',
        href: '/[lang]/payment/manual-payment',
        exact: true,
    },
    {
        title: 'card',
        href: '/[lang]/payment',
        exact: true,
    },
] as const;
