import { Metadata } from "next";
import Image from "next/image";
import TextCard from "@/app/Components/textcard";

export const metadata: Metadata = {
    title: "Ripple",
    description: "The page is about...",
}

export default function Project() {
    return (
        <div>
            <article className="max-w-screen-2xl">
                <div className="w-full p-4 pb-8 md:px-64 md:pb-28">
                    <div className="w-full md:w-9/12">
                        <h1 className="text-3xl font-bold w-full">Ripple - a refreshed ClassIn X menu</h1>
                        <p className="mt-2">May-Jul, 2021</p>
                        <p className="mt-12">{"Ripple revitalizes ClassIn X's digital whiteboard by overhauling its menu to boost usability and modernize the interface. This enhancement aims to streamline presentations and interactions, providing a smoother, more intuitive experience for instructors and students alike."}</p>
                    </div>
                </div>
                <div className="w-full relative pt-[47.5%]">
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
                <ul className="flex justify-between w-full p-4 py-8 md:px-64 md:py-32" >
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

            <div className="max-w-screen-2xl w-full rounded-2xl border-t border-zinc-800 p-4 py-12 md:px-64 md:py-24">
                <div aria-label="project background" className="mb-4 md:mb-56">
                    <div className="flex flex-col w-full md:w-9/12">
                        <h3>Background</h3>
                        <h1 className="text-xl font-bold mt-2">The initial ClassIn X menu</h1>
                        <p className="mt-8">{"The initial menu features a two-ring circular design: the inner ring presents a static array of primary functions, while the outer ring serves as a flexible space for secondary features and beyond."}</p>
                    </div>
                    <div className="my-16 w-full relative pt-[34%] rounded-2xl overflow-hidden">
                        <Image
                            src="/ripple-classinx-menu/background-1.png"
                            alt=""
                            quality={100}
                            sizes="100vw"
                            fill
                            loading='lazy'
                            objectFit="cover"
                        />
                    </div>
                    <div className="flex flex-col w-full md:w-9/12">
                        <p className="mt-8">{"The menu by default displays 18 feature icons, arranged clockwise from the inner to the outer ring without an apparent logic to their placement."}</p>
                    </div>
                    <div className="my-16 w-full relative pt-[43%] rounded-2xl overflow-hidden">
                        <Image
                            src="/ripple-classinx-menu/background-2.png"
                            alt=""
                            quality={100}
                            sizes="100vw"
                            fill
                            loading='lazy'
                            objectFit="cover"
                        />
                    </div>
                </div>

                <div aria-label="Key experience problems" className="mb-4 md:mb-24">
                    <div className="flex flex-col w-full md:w-9/12">
                        <h3>Experience pain points</h3>
                        <h1 className="text-xl font-bold mt-2">Key experience problems</h1>
                        <p className="mt-8">{"After reviewing and analyzing feedback from both internal and external sources, we identified three main categories of user complaints."}</p>
                    </div>
                    <div className="flex flex-col gap-4 my-16 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <TextCard
                                tag="Problem 01"
                                title="Inefficient navigation"
                                des="Users have trouble locating features. Meanwhile, the menu behaves inconsistently, concealing options when activating tools with submenus, such as the Pen tool."
                            />
                        </div>
                        <div className="flex-1">
                        <TextCard
                            tag="Problem 02"
                            title="Low discoverability"
                            des="Users struggle to recognize and understand certain icons, like the Pointer, and many are unaware that pressing the LOGO collapses the entire menu."
                        />
                        </div>
                        <div className="flex-1">
                        <TextCard
                            tag="Problem 03"
                            title="Overloaded choices"
                            des="Users find the menu cluttered with too many options without clear grouping, making it difficult to efficiently complete primary tasks."
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 