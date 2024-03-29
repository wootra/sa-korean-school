'use client';

import React, { useEffect } from 'react';

const AccordionManager = () => {
    useEffect(() => {
        const button: HTMLButtonElement | null = document.querySelector(
            '#registration-payment-group button[data-state="closed"]'
        );
        if (button) {
            button?.click();
        }
    }, []);
    return <div></div>;
};

export default AccordionManager;
