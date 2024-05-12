import SplashScreen from "./Components/splash";

export default function Loading() {
    console.log("Loading component rendered"); // This will show in your browser console

    return (
        <div className="flex flex-col gap-12 px-12 items-center justify-center w-full h-dvh text-center">
            <SplashScreen />
        </div>
    );
}
