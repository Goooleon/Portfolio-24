'use client'

import SplashScreen from "./Components/splash";

export default function Loading() {
    return (
        <div className="flex flex-col gap-12 px-12 items-center justify-center w-full h-dvh text-center">
            <SplashScreen />
            <h1 className="text-2xl">{`loading`}</h1>
        </div>
    );
}



