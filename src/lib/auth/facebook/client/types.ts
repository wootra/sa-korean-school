import { AuthProviders } from '../../types';

export type User = {
    name?: string;
    email?: string;
    error: string;
    uid?: string;
    token?: string;
    provider: AuthProviders;
};
