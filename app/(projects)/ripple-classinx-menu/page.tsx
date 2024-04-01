import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
    title: "Ripple - a refreshed ClassIn X menu",
    description: "The page is about...",
}

export default function Project() {
    return (
        <div>
            <article className="my-24 flex flex-col gap-12">
                <h1 className="text-2xl font-bold">Ripple - a refreshed ClassIn X menu</h1>
                <p>May-Jul, 2021</p>
                <p>Ripple revitalizes ClassIn X's digital whiteboard by overhauling its menu to boost usability and modernize the interface. This enhancement aims to streamline presentations and interactions, providing a smoother, more intuitive experience for instructors and students alike.</p>
                <div className="w-full aspect-auto relative">
                    <Image
                        src="/ripple-classinx-menu/cover.png"
                        alt="cover image"
                        loading='lazy'
                        width={9999}
                        height={900}
                        quality={100}
                        sizes="100vw"
                        objectFit='fill'
                    />
                </div>
                <ul className="flex justify-between w-full">
                    <li>
                        <h3 className="font-bold text-xl">Role</h3>
                        <p>Lead Interaction Designer</p>
                    </li>
                    <li>
                        <h3 className="font-bold text-xl">Platform</h3>
                        <p>{"Windows-based Touchscreen(110 inches)"}</p>
                    </li>
                    <li>
                        <h3 className="font-bold text-xl">Highlights</h3>
                        <dt>Shipped in 2021</dt>
                        <dt>1 Design patent issued</dt>
                    </li>
                </ul>
            </article>
        </div>
    );
} 