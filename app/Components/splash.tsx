'use client'

import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const SplashScreen = () => {
    return (
        <div className="h-32 w-32">
            <DotLottieReact
                src="/splash-screen.lottie"
                loop
                autoplay
                onError={(e) => console.error('Error loading Lottie:', e)}
            />
        </div>
    );
};

export default SplashScreen;
