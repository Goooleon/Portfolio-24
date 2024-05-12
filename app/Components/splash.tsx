'use client'

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
 
const SplashScreen = () => {
    return (
        <div className="flex flex-col gap-12 px-12 items-center justify-center w-full h-dvh text-center bg-black">
            <div className="w-40 h-40">
                <DotLottieReact
                    src="/splash-screen.lottie"
                    loop
                    autoplay
                />
            </div>
        </div>
    );
};
 
export default SplashScreen;