import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="data:image/jpeg;base64,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nfTmZm08UQwYbg3vvr1micarixAA0JC9nNlvobdSdzt3bSG5LgaUWE4jhigRlCguiOvoiwJDINFuxJsN9Bqekx3rfpFygLMFbYFrAkWOl8q69w6QmJQWuC7dQQLAkkWBB12GtheKt3zSPozkqexdth3aW6eA5cp1OmWJsDcamwJtbcm2wkoubU5iijXfS5NgCL2uST59YVHZ2ANjrot1RRrexJ0Uac42xJFHQab621OgtqTl2v75FW19PV7Nxa1jbUD56yGFhoQb6WB74MAQQMsif1PhvLpQLMABvYX1trr0v36AyaDgMC2qjUi51t+nTa8cTEetmqdq+cixIYhcuRiNRfQdwB96djSQPFKq2IubgqTlVQWFvVUXuBca2FyDsQYoGtroba6i4PiDvCV8S7ks12J00FgANlUAWVRyUWAgsjFScpAHX3dY0thN77E0MS6jKo3I0sGzWNwGBHa8DLfmGbU6n76/W/vgFYqbgkEbEGxF+8e+UzrG42K2ENSUd4Iv0lLzRRJLs0pOvJEYHS6yLTrRUFhBUkq5g9JBaGlDGRXsLaddhuL87X5y/wCaOlrC3QD997xO8m8lxHY21cndielyTbzlkrlTdTYiJh52aLQGph3qE7mDNU8jB5pQmNRQrYQmVvK3kXlUBe8kNB3nXhQBfSna9vDSUvK3nXhQE3k3lbzoMC95IeUnXk0OwweWV4C8nNJoeoap1dbgkEai3WHGJJFnsw3sRry2bfkOcQVpcPaJxBSH0ZVByi5I1J3A02sd9Tv1iwAAvvr7vLnBGoJAqQSBsLUN9tBb335m8oO6VNScKx298oVhWAFud+XMeMNRrMLqtmzaEEA31B5jTW39mKCrtptzEnP0ioEzVr01UgM4dtQQt8q25BrC/u0iNd1XTcnkOWmlzy/vSK1K5P3gDCK7G30XqVCftKTp01ILASSs6dACAJIedOgBBeRedOgB151506AI684GdOgB151506AHXkTp0AOkzp0AIk3nToAROnToAdeTedOgM68686dADrzrzp0TAsDLXnTpIEgSDOnRAReVM6dACJ06dGB0gzp0AInTp0oD/9k="
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
