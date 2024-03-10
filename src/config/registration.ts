export const PAYMENTS = Object.freeze({
    PREREG: 'pre-registered',
    NOREG: 'non-registered',
    DONATION: 'donation',
});
export type PaymentOptions = (typeof PAYMENTS)[keyof typeof PAYMENTS];
