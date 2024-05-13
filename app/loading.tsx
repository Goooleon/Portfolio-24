import SplashScreen from "./Components/splash";

export default function Loading() {
    console.log("Loading component rendered"); // This will show in your browser console

    return (
        <div className="flex items-center justify-center w-full h-dvh">
            <SplashScreen />
        </div>
    );
}
