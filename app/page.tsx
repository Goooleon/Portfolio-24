import Image from "next/image";
import Link from 'next/link';
import DownloadButton from "./Components/buttons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="#"
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
      </div>

      <div>
        <article aria-label="Introduction">
          <h1><span role="img" aria-label="Waving Hand">👋🏽</span> Hey, I am Gü</h1>
          <h2>
            a Product Designer at <span aria-label="Microsoft">Micros🌎ft</span> in <span aria-label="Location">📍Beijing,</span>
          </h2>
          <p>
            a creative mind that blends Human Centered Design with Random Intuition,
          </p>
          <p>
            a free soul who enjoys <span aria-label="skiing">🎿</span> <span aria-label="frisbee">🥏</span> <span aria-label="cycling">🚴🏽</span> <span aria-label="surfing">🏄🏼</span> <span aria-label="mountains">🗻</span>
          </p>
        </article>
      </div>


      <div className="m-32">
        <Image
          src="/work.png"
          alt="Vercel Logo"
          width={1440}
          height={690}
          priority
        />
      </div>

      <div className="m-8 underline">
        <ul>
          <li className="p-4"><Link href="/bing-video-design-kit">
            Bing Video Design Kit
          </Link>
          </li>
          <li className="p-4"><Link href="/copilot-multimedia-experience">
            Copilot Multimedia Experience
          </Link></li>
          <li className="p-4"><Link href="/follow-on-edge">
            Follow on Edge
          </Link></li>
        </ul>
      </div>

      <div className="m-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <article>
          <h1 className="font-bold">why design?</h1>
          <p className="text-sm opacity-50"> I believe in the transformational power of design and its attempt to make the world (a little) better. Regardless of its form, design is essentially a mindset of empathizing with others (people or creature) and figuring out how things work.
            < br /> <br />
            I devote myself to creating (functional) useful and/or (emotional) enjoyable experiences that I call it meaningful moments.
          </p>
        </article>
        <DownloadButton />
      </div>

      <div className="m-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <article>
          <h1 className="font-bold">Gü vs Gu</h1>
          <p className="text-sm opacity-50">
            Gu is my family name, and I am simply used to it. The Umlaut is to make u a S-M-I-L-E-Y FACE :)
          </p>
        </article>
      </div>

      <div className="m-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <article>
          <h1 className="font-bold">a little more</h1>
          <p className="text-sm opacity-50">
            Just a little more, more personal, not about work or profession.
          </p>
        </article>
      </div>

      <div className="m-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-30`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>



      </div>
    </main>
  );
}