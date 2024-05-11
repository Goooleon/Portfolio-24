import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const SplashScreen = () => {
    return (
        <div className="flex items-center justify-center w-full h-dvh text-center bg-black">
            <div className="h-32 w-32">
                <DotLottieReact
                    src="/splash-screen.lottie"
                    loop
                    autoplay
                    onError={(e) => console.error('Error loading Lottie:', e)}
                />
            </div>
        </div>
    );
};

export default SplashScreen;
