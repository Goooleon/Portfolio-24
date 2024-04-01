import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Ripple - a refreshed ClassIn X menu",
    description: "The page is about...",
}

export default function Project() {
    return (
        <div>
            <article className="flex flex-col gap-12">
                <div className="flex flex-col gap-8 w-full p-4 md:flex md:px-64">
                    <h1 className="text-2xl font-bold w-full">Ripple - a refreshed ClassIn X menu</h1>
                    <p>May-Jul, 2021</p>
                    <p>{"Ripple revitalizes ClassIn X's digital whiteboard by overhauling its menu to boost usability and modernize the interface. This enhancement aims to streamline presentations and interactions, providing a smoother, more intuitive experience for instructors and students alike."}</p>
                </div>
                <div className="w-full max-w-screen-2xl relative pt-[47.5%]">
                    <Image
                        src="/ripple-classinx-menu/cover.png"
                        alt="cover image"
                        quality={100}
                        sizes="100vw"
                        fill
                        objectFit="contain"
                        priority
                    />
                </div>
                <ul className="flex justify-between w-full p-4 md:px-64" >
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

            <div className="p-4 md:px-64 md:py-24">
                <h3>Background</h3>
                <h1>The initial ClassIn X menu</h1>
                <p>{"The initial menu features a two-ring circular design: the inner ring presents a static array of primary functions, while the outer ring serves as a flexible space for secondary features and beyond."}</p>
                <div className="w-full relative pt-[100%]">
                <Image
                    src="/ripple-classinx-menu/background-1.png"
                    alt=""
                    quality={100}
                    sizes="100vw"
                    fill
                    style={{
                        objectFit: 'contain',
                    }}
                />
                </div>
            </div>
        </div>
    );
} 