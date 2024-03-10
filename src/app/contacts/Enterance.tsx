'use client';

import { Heading } from '@/entities';
import React, { useEffect, useRef, useState } from 'react';

const Enterance = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(window.innerWidth);
    const height = Math.floor(width * (450 / 600));
    useEffect(() => {
        const element = ref.current;
        let resizeObserver: ResizeObserver;
        if (element) {
            resizeObserver = new ResizeObserver(entries => {
                for (const entry of entries) {
                    if (entry.contentBoxSize) {
                        const contentBoxSize = entry.contentBoxSize[0];
                        const el = ref.current;
                        if (el) {
                            setWidth(contentBoxSize.inlineSize);
                        }
                    }
                }
            });
            resizeObserver.observe(element);
        }

        return () => {
            if (resizeObserver && element) {
                resizeObserver.unobserve(element);
            }
        };
    }, []);
    return (
        <div
            className={`mx-auto w-full py-4 flex flex-col justify-start items-start`}
            ref={ref}
        >
            <Heading type='page'>Enterance</Heading>
            <iframe
                src='https://www.google.com/maps/embed?pb=!4v1710025477167!6m8!1m7!1s8nF4_3Pb_-DzH2_armqj4w!2m2!1d29.56817610023719!2d-98.47532390011177!3f134.72851357663603!4f-5.127441453511821!5f0.7820865974627469'
                width={width}
                height={height}
                style={{ border: 0 }}
                allowFullScreen={false}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
        </div>
    );
};

export default Enterance;
