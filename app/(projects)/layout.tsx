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
                label="Previous"
              />
            </li>
            <li>
              <MyButton
                label="Next"
              /></li>
          </ul>
        </div>
      </header>
      {children}
    </div>
  );
}
