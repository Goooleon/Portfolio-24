import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Bing Video Design Kit",
    description: "Bing Video Design Kit is a fun project",
}

export default function Project() {
    return (
    <div>
        <Link href="/">
         <Image
              src="/Gu-LOGO.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={60}
              height={24}
              priority
        />
        </Link>
        <h1>Bing Video Design Kit</h1>
    </div>
    );
    
} 