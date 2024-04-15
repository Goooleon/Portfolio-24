import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="flex flex-col gap-12 px-12 items-center justify-center w-full h-dvh text-center">
            <Link href="/">
                <Image
                    src="/Gu-LOGO.svg"
                    alt="Vercel Logo"
                    className="dark:invert hover:-translate-y-1 hover:skew-y-3 duration-300 ease-in-out"
                    width={60}
                    height={24}
                    priority
                />
            </Link>
            <h1 className="text-2xl">{`Oops, you are in the wrong place :(`}</h1>
        </div>
    );
}