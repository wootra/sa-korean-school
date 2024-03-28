export type AuthInfo = {
    token?: string;
    provider?: string;
};

export type ServerUser = {
    email?: string;
    id?: string;
} & AuthInfo;

export type FacebookUser = {
    email: string;
    token: string;
    id: string;
};

export type StripeUser = {
    customer_email?: string;
};
