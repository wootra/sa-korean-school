export const PAYMENTS = Object.freeze({
    PREREG: 'pre-registered',
    NOREG: 'non-registered',
});
export type PaymentOptions = (typeof PAYMENTS)[keyof typeof PAYMENTS];
