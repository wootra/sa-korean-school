/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        // FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
        // FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET,
        // NEXTAUTH_URL: process.env.VERCEL_URL,
        // NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
        //     process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
        // STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        // PREREGISTER_CLASS_PRICE: process.env.PREREGISTER_CLASS_PRICE,
        // NOREGISTER_CLASS_PRICE: process.env.NOREGISTER_CLASS_PRICE,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.example.com',
                port: '',
                pathname: '/thumbnail?id=*&size=*',
            },
        ],
    },
    // images: {
    //     formats: ['image/avif', 'image/webp'],

    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: 'assets.vercel.com',
    //             pathname: '/thumbnail?id=*&size=*',
    //             port: '',
    //             // https://drive.google.com/thumbnail?id=*&size=*
    //         },
    //     ],
    //     // minimumCacheTTL:
    //     //     process.env.NODE_ENV === 'development' ? 60 : 60 * 60 * 6,
    // },
};

export default nextConfig;
