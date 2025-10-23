import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MyButton from "../Components/buttons";

export const metadata: Metadata = {
  title: {
    default: "Project",
    template: "Project · %s",
  }
}

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:max-w-screen-2xl mx-auto">
      <header>
        <div className="z-10 flex font-mono justify-between p-8 md:px-64 md:py-24">
          <div>
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
          </div>
          <ul className="flex gap-2 md:gap-4">
            <li>
              <MyButton
                label="LinkedIn"
                href="https://www.linkedin.com/in/shengfeng-gu/"
              />
            </li>
          </ul>
        </div>
      </header>
      {children}
      <footer className="px-8 py-12 md:px-64 md:py-24 grid md:max-w-screen-2xl mx-auto w-full">
        <p>{'goooleon@gmail.com'} • <a href="https://www.linkedin.com/in/shengfeng-gu/" className="hover:underline">LinkedIn</a> </p>
        <p>Made 🖖🏽by <span className="text-black dark:text-white">©Gü</span> 2025-2026</p>
      </footer>
    </div>
  );
}
