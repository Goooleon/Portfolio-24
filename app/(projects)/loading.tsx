import Image from "next/image";

export default function Loading () {
    return  (
        <div>
        <div><Image
        src="/Gu-LOGO.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={60}
        height={24}
        priority/></div>

    <h1>Loading...</h1>;
    </div>
    );
}