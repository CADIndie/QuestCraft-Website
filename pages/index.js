import Head from "next/head";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Head>
                <title>QuestCraft | Home</title>
                <meta
                    name="description"
                    content="QuestCraft, utilizing Vivecraft and Pojlib, is a standalone port of Minecraft: Java Edition to Meta Quest Headsets."
                />
                <meta property="og:title" content="QuestCraft | Home" />
                <meta
                    property="og:description"
                    content="QuestCraft, utilizing Vivecraft and Pojlib, is a standalone port of Minecraft: Java Edition to Meta Quest Headsets."
                />
                <meta property="og:url" content="https://questcraft.org/" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <section className="container mx-auto px-6 py-10 text-center max-w-6xl">
                    <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
                        Welcome to QuestCraft
                    </h1>
                    <p className="mt-6 text-lg text-gray-500 dark:text-gray-300">
                        QuestCraft, utilizing Vivecraft and Pojlib, is a standalone port of Minecraft: Java Edition to
                        Meta Quest Headsets.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            href="https://sidequestvr.com/app/7150/"
                            className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-blue-500 focus:outline-none"
                        >
                            <Image
                                src="/image/mark.webp"
                                alt="SideQuest"
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                            <span className="ml-2 font-medium">Get on SideQuest</span>
                        </a>
                        <a
                            href="https://github.com/QuestCraftPlusPlus/QuestCraft/releases"
                            className="flex items-center bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-gray-100 focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="20.7px"
                                className="fill-current"
                            >
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path
                                    d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                                    fill="currentColor"
                                />
                            </svg>
                            <span className="ml-2 font-medium">Get on GitHub</span>
                        </a>
                    </div>

                    <p className="mt-3 text-sm text-gray-400">
                        A compatible Quest device required
                    </p>

                    <div className="relative w-full mt-10">
                        <Image
                            src="/image/mc-w-shader.png"
                            alt="Minecraft Shader"
                            width={1000}
                            height={400}
                            className="w-full rounded-xl object-cover"
                        />

                        <img
                            src="/image/alexbutton.png"
                            alt="Alex"
                            className="hidden lg:block w-16 absolute top-[-80px] left-3"
                        />

                        <img
                            src="/image/chicken.png"
                            alt="Chicken"
                            className="hidden lg:block w-16 absolute top-[-80px] right-3"
                            title="Thanks to Reality"
                        />
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-900 py-12">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 animate-fadeInUp">
                            About QuestCraft
                        </h2>
                        <p className="text-lg text-gray-500 dark:text-gray-300 max-w-3xl mx-auto animate-fadeInUp delay-150">
                            QuestCraft bridges the gap between Minecraft: Java Edition and Meta Quest Headsets, providing an immersive experience that is both innovative and accessible.
                        </p>
                    </div>
                </section>

                <section className="bg-gray-50 dark:bg-gray-800 py-12 relative">
                    <div className="container mx-auto px-6">
                        <div className="relative invisible sd:invisible md:invisible lg:visible">
                            <img
                                className="w-32 absolute left-20 -top-14"
                                src="/image/cat.png"
                                alt="Cat thanks to Dusk"
                                title="Thanks to Dusk"
                            />
                        </div>
                        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6 animate-fadeInDown">
                            Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center p-6 text-center rounded-xl bg-white dark:bg-gray-900 shadow transition hover:shadow-2xl transform hover:-translate-y-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-16 text-blue-600 mb-4"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
                                    Open Source
                                </h3>
                                <p className="mt-2 text-gray-500 dark:text-gray-300">
                                    All code is public and maintained on GitHub.
                                </p>
                            </div>
                            <div className="flex flex-col items-center p-6 text-center rounded-xl bg-white dark:bg-gray-900 shadow transition hover:shadow-2xl transform hover:-translate-y-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-16 text-blue-600 mb-4"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
                                    Multiplayer
                                </h3>
                                <p className="mt-2 text-gray-500 dark:text-gray-300">
                                    Connect seamlessly to Minecraft servers.
                                </p>
                            </div>
                            <div className="flex flex-col items-center p-6 text-center rounded-xl bg-white dark:bg-gray-900 shadow transition hover:shadow-2xl transform hover:-translate-y-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-16 text-blue-600 mb-4"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zM18.537 18.567A9.961 9.961 0 0 1 12 22c-5.523 0-10-4.477-10-10 0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
                                    Updates
                                </h3>
                                <p className="mt-2 text-gray-500 dark:text-gray-300">
                                    Regular improvements keeping up with Java Edition.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-900 py-12">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 animate-fadeInUp">
                            Join Our Community
                        </h2>
                        <p className="text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto animate-fadeInUp delay-150">
                            Follow us for the latest news, updates, and exclusive content. Become part of an enthusiastic community that shares your passion for Minecraft and VR.
                        </p>
                        <div className="mt-8 flex justify-center gap-6 animate-fadeInUp delay-300">
                            <a
                                href="https://github.com/QuestCraftPlusPlus/QuestCraft"
                                className="text-gray-600 transition-transform duration-300 transform hover:scale-110"
                                aria-label="GitHub"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="28"
                                    height="28"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://sidequestvr.com/app/7150/"
                                className="text-blue-600 transition-transform duration-300 transform hover:scale-110"
                                aria-label="SideQuest"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="28"
                                    height="28"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://patreon.com/questcraftxr"
                                className="text-red-600 transition-transform duration-300 transform hover:scale-110"
                                aria-label="Patreon"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="28"
                                    height="28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.7857 16.8055C18.7701 16.8055 22 13.5756 22 9.59124C22 5.6069 18.7701 2.37695 14.7857 2.37695C10.8014 2.37695 7.57143 5.6069 7.57143 9.59124C7.57143 13.5756 10.8014 16.8055 14.7857 16.8055Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M5.52622 2.37695H2V21.623H5.52622V2.37695Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
