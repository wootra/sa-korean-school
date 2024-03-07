'use client';
import { useEffect, useState } from 'react';

const useHash = () => {
    const [hash, setHash] = useState<Record<string, string>>({});

    useEffect(() => {
        const handleHashChange = () => {
            const hashStr = (window.location.hash ?? '')
                .replace('#', '')
                .split('&');
            const hashObj = hashStr.reduce((acc, cur) => {
                const [key, value] = cur.split('=');
                return { ...acc, [key]: value };
            }, {});
            setHash(hashObj);
        };

        window.addEventListener('hashchange', handleHashChange);

        // Call once to set initial hash
        handleHashChange();

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return hash;
};

export default useHash;
