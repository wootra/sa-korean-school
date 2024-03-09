'use client';

import React from 'react';
import { useAuth } from '../SessionContext';

const TokenInput = () => {
    const { user } = useAuth();
    return (
        user.token && <input type='hidden' name='token' value={user.token} />
    );
};

export default TokenInput;
