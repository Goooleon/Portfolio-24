'use client'

import React, { useEffect, useState, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const SplashScreen = () => {
    const [isClient, setIsClient] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsClient(true);
            // Optionally initialize IntersectionObserver here if needed
        }
    }, []);

    return (
        <div className="flex flex-col gap-12 px-12 items-center justify-center w-full h-dvh text-center bg-black">
            {isClient && (
                <div ref={ref} className="w-40 h-40">
                    <DotLottieReact
                        src="/splash-screen.lottie"
                        loop
                        autoplay
                    />
                </div>
            )}
        </div>
    );
};

export default SplashScreen;
