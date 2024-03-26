import { Metadata } from "next";

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
    <>
        {children}
        <h1>this is tailored page layout for project detail page!</h1>;
    </>
  );
}
