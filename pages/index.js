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
                            <span className="ml-2 font-medium">Get it on SideQuest</span>
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
                            className="hidden lg:block w-16 absolute top-[-105px] left-[295px]"
                        />

                        <img
                            src="/image/chicken.png"
                            alt="Chicken"
                            className="hidden lg:block w-16 absolute top-[-63px] right-[100px]"
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
                            QuestCraft allows anyone to play Minecraft: Java Edition standalone in VR, utilizing Vivecraft.
                        </p>
                    </div>
                </section>

                <section className="bg-gray-50 dark:bg-gray-800 py-12 relative">
                    <div className="container mx-auto px-6">
                        <div className="relative invisible sd:invisible md:invisible lg:visible">
                            <img
                                className="w-32 absolute left-20 top-[10px]"
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
                            Join the community for news, updates and a inclusive community. Join to become part of a growing community.
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
                                href="https://discord.gg/questcraft"
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
                                        d="M20.317 4.54101C18.7873 3.82774 17.147 3.30224 15.4319 3.00126C15.4007 2.99545 15.3695 3.00997 15.3534 3.039C15.1424 3.4203 14.9087 3.91774 14.7451 4.30873C12.9004 4.02808 11.0652 4.02808 9.25832 4.30873C9.09465 3.90905 8.85248 3.4203 8.64057 3.039C8.62448 3.01094 8.59328 2.99642 8.56205 3.00126C6.84791 3.30128 5.20756 3.82678 3.67693 4.54101C3.66368 4.54681 3.65233 4.5565 3.64479 4.56907C0.533392 9.29283 -0.31895 13.9005 0.0991801 18.451C0.101072 18.4733 0.11337 18.4946 0.130398 18.5081C2.18321 20.0401 4.17171 20.9701 6.12328 21.5866C6.15451 21.5963 6.18761 21.5847 6.20748 21.5585C6.66913 20.9179 7.08064 20.2424 7.43348 19.532C7.4543 19.4904 7.43442 19.441 7.39186 19.4246C6.73913 19.173 6.1176 18.8662 5.51973 18.5178C5.47244 18.4897 5.46865 18.421 5.51216 18.3881C5.63797 18.2923 5.76382 18.1926 5.88396 18.0919C5.90569 18.0736 5.93598 18.0697 5.96153 18.0813C9.88928 19.9036 14.1415 19.9036 18.023 18.0813C18.0485 18.0687 18.0788 18.0726 18.1015 18.091C18.2216 18.1916 18.3475 18.2923 18.4742 18.3881C18.5177 18.421 18.5149 18.4897 18.4676 18.5178C17.8697 18.8729 17.2482 19.173 16.5945 19.4236C16.552 19.4401 16.533 19.4904 16.5538 19.532C16.9143 20.2414 17.3258 20.9169 17.7789 21.5576C17.7978 21.5847 17.8319 21.5963 17.8631 21.5866C19.8241 20.9701 21.8126 20.0401 23.8654 18.5081C23.8834 18.4946 23.8948 18.4742 23.8967 18.452C24.3971 13.1911 23.0585 8.6212 20.3482 4.57004C20.3416 4.5565 20.3303 4.54681 20.317 4.54101ZM8.02002 15.6802C6.8375 15.6802 5.86313 14.577 5.86313 13.222C5.86313 11.8671 6.8186 10.7639 8.02002 10.7639C9.23087 10.7639 10.1958 11.8768 10.1769 13.222C10.1769 14.577 9.22141 15.6802 8.02002 15.6802ZM15.9947 15.6802C14.8123 15.6802 13.8379 14.577 13.8379 13.222C13.8379 11.8671 14.7933 10.7639 15.9947 10.7639C17.2056 10.7639 18.1705 11.8768 18.1516 13.222C18.1516 14.577 17.2056 15.6802 15.9947 15.6802Z"
                                        fill="currentcolor"
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
