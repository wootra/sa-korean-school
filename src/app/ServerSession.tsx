'use server';

import { AuthProvider } from '@/app/SessionContext';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';

const ServerSession = async ({ children }: { children: React.ReactNode }) => {
    const session = await getServerSession(authOptions);
    return (
        <AuthProvider session={session ?? ({} as Session)}>
            {children}
        </AuthProvider>
    );
};

export default ServerSession;
