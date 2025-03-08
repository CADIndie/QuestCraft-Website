import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Support() {
    return (
        <>
            <Head>
                <title>QuestCraft | Support</title>
                <meta name="description" content="Get support for QuestCraft through our Discord community" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="QuestCraft | Support" />
                <meta property="og:description" content="Get support for QuestCraft through our Discord community" />
                <meta property="og:url" content="https://questcraft.org/" />
                <meta property="og:site_name" content="QuestCraft" />
                <link rel="canonical" href="https://questcraft.org/" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="twitter:url" content="https://questcraft.org/" />
                <meta name="twitter:title" content="QuestCraft | Support" />
                <meta name="twitter:description" content="Get support for QuestCraft through our Discord community" />
                <meta name="twitter:card" content="summary" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="bg-white dark:bg-gray-900">
                <div className="container max-w-4xl px-6 py-10 mx-auto">
                    <h1 className="text-4xl font-semibold text-center text-gray-800 dark:text-white">QuestCraft Support</h1>

                    <div className="flex flex-col items-center mt-8 space-y-3 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" className="w-20 text-indigo-600" fill="currentColor">
                            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                        </svg>
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">Join Our Discord Community</h2>
                        <p className="text-gray-500 dark:text-gray-300 max-w-lg">
                            The best way to get help with QuestCraft is through our active Discord community. Our team and experienced community members are ready to assist you with any issues or questions.
                        </p>
                        <a href="https://discord.gg/questcraft" className="px-6 py-3 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Join Discord
                        </a>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-8">Quick Help Guide</h2>

                        <div className="mt-12 space-y-8">
                            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                                <div className="flex items-center justify-between w-full p-8">
                                    <h1 className="font-semibold text-gray-700 dark:text-white">How can I install QuestCraft?</h1>
                                </div>
                                <hr className="border-gray-200 dark:border-gray-700" />
                                <p className="px-8 py-4 text-sm text-gray-500 dark:text-gray-300">
                                    For installation help, you can use SideQuest available at
                                    <a className="text-blue-600 font-medium px-1" href="https://sidequestvr.com/app/7150">SideQuest's Website</a> or download releases from
                                    <a className="text-blue-600 font-medium px-1" href="https://github.com/QuestCraftPlusPlus/QuestCraft/releases">our GitHub Repository</a>.
                                    The APK can be installed normally using apps available on the Meta Quest store or just installing directly using SideQuest.
                                </p>
                            </div>

                            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                                <div className="flex items-center justify-between w-full p-8">
                                    <h1 className="font-semibold text-gray-700 dark:text-white">Common issues with QuestCraft</h1>
                                </div>
                                <hr className="border-gray-200 dark:border-gray-700" />
                                <p className="px-8 py-4 text-sm text-gray-500 dark:text-gray-300">
                                    Common issues include login problems, performance concerns, and version compatibility.
                                    Our Discord server has dedicated troubleshooting channels with pinned solutions to these problems
                                    and community members ready to help with your specific situation.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 flex flex-col items-center">
                        <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Other Support Options</h2>
                        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
                            <a href="https://github.com/QuestCraftPlusPlus/QuestCraft/issues" className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 text-blue-600">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                                        fill="currentcolor"
                                    />
                                </svg>
                                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">GitHub Issues</h1>
                                <p className="text-gray-500 dark:text-gray-300">Report bugs and technical issues through our GitHub repository</p>
                            </a>

                            <a href="https://www.youtube.com/@QuestCraftXR" className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 text-red-600">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" fill="currentcolor" />
                                </svg>
                                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">Tutorial Videos</h1>
                                <p className="text-gray-500 dark:text-gray-300">Check our YouTube channel for visual guides and tutorials</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}