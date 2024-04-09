export const PAYMENTS = Object.freeze({
    DEPOSIT: 'deposit',
    // NOREG_CURR_STUDENT: 'non-registered-curr-student',
    // NOREG_NEW_STUDENT: 'non-registered-new-student',
    // PREREG_CURR_STUDENT: 'pre-registered-curr-student',
    // PREREG_NEW_STUDENT: 'pre-registered-new-student',
    // NOREG_CURR_STUDENT_GOJOSEON: 'non-registered-curr-student-gojoseon',
    // NOREG_NEW_STUDENT_GOJOSEON: 'non-registered-new-student-gojoseon',
    // PREREG_CURR_STUDENT_GOJOSEON: 'pre-registered-curr-student-gojoseon',
    // PREREG_NEW_STUDENT_GOJOSEON: 'pre-registered-new-student-gojoseon',
    // DONATION: 'donation',
});
export type PaymentOptions = (typeof PAYMENTS)[keyof typeof PAYMENTS];
export const PAYMENT_ERRORS = Object.freeze({
    NO_SUCH_CLASS: 'No such class exists',
    NO_SUCH_PAYMENT_PLAN: 'No such payment plan exists',
    NO_SESSION: 'No valid session exists',
    UNKNOWN_ERROR: 'Unknown error',
});

export type PaymentErrorTypes = keyof typeof PAYMENT_ERRORS;
