import { Metadata } from "next";
import Image from "next/image";
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
    <div className="m-4 md:mx-64 md:my-32">
      <header>
        <div className="z-10 flex font-mono justify-between mb-12 lg:flex">
          <div>
            <a
              className="pointer-events-none lg:pointer-events-auto lg:p-0"
              href="/"
              target="_self"
              rel="noopener noreferrer"
            >
              <Image
                src="/Gu-LOGO.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={60}
                height={24}
                priority
              />
            </a>
          </div>
          <ul className="flex gap-2">
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
      <h1>this is tailored page layout for project detail page!</h1>;
    </div>
  );
}
