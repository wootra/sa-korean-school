declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
            FACEBOOK_APP_ID: string;
            FACEBOOK_APP_SECRET: string;
        }
    }
    interface FB {
        login: (
            callback: (response: FBLoginResponse) => void,
            options: { scope?: string }
        ) => void;
    }
}
