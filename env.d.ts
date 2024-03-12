namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
        FACEBOOK_APP_ID: string;
        FACEBOOK_APP_SECRET: string;
        STRIPE_SECRET_KEY: string;
        VERCEL_URL: string;
        NEXTAUTH_URL: string;
        PREREGISTER_CLASS_PRICE: string;
        NOREGISTER_CLASS_PRICE: string;
        COURSE_INTRO_ID: string;
        COURSE_SCHEDULE_ID: string;
        COURSE_TIMETABLE_ID: string;
        ABOUT_EVENTS_ID: string;
    }
}

declare global {
    interface FB {
        login: (
            callback: (response: FBLoginResponse) => void,
            options: { scope?: string }
        ) => void;
    }
}
