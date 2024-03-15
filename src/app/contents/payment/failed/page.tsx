'use client';

import CenterMain from '@/layouts/CenterMain';
import { useSearchParams } from 'next/navigation';
import React from 'react';
const PaymentSuccess = () => {
    const param = useSearchParams();
    return <CenterMain>payment failed!</CenterMain>;
};

export default PaymentSuccess;
