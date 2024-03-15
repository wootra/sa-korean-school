export const PAYMENTS = Object.freeze({
    PREREG: 'pre-registered',
    NOREG: 'non-registered',
    DONATION: 'donation',
});
export type PaymentOptions = (typeof PAYMENTS)[keyof typeof PAYMENTS];
export const PAYMENT_ERRORS = Object.freeze({
    NO_SUCH_CLASS: 'No such class exists',
});
