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
            <h1>
                Bing Video Design Kit
            </h1>
            <p>
                The Bing Design System, while comprehensive, doesn&apos;t fully cater to the specific needs of the multimedia team. To bridge this gap, the Video Design Kit was created within the Bing Design System framework. It serves as a customized resource for video design, offering a centralized hub for Multimedia Designers to synchronize and collaborate effectively.
            </p>
        </div>
    );

} 