import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <body className="bg-white dark:bg-gray-900">
            <Head>
                <title>QuestCraft | Home</title>
                <meta name="description" content="QuestCraft, utilizing Vivecraft and Pojlib, a standalone port of Minecraft: Java Edition to Oculus Quest Headsets." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="QuestCraft | Home" />
                <meta property="og:description" content="QuestCraft, utilizing Vivecraft and Pojlib, a standalone port of Minecraft: Java Edition to Oculus Quest Headsets." />
                <meta property="og:url" content="https://questcraft.org/" />
                <meta property="og:site_name" content="QuestCraft" />
                <link rel="canonical" href="https://questcraft.org/" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="twitter:url" content="https://questcraft.org/" />
                <meta name="twitter:title" content="QuestCraft | Home" />
                <meta name="twitter:description" content="QuestCraft, utilizing Vivecraft and Pojlib, a standalone port of Minecraft: Java Edition to Oculus Quest Headsets." />
                <meta name="twitter:card" content="summary" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex justify-center mt-20"></div>
            <div className="container px-6 py-10 mx-auto max-w-6xl -indent-5">
                QuestCraft, QCXR, Digital Genesis, and all partners and cooperators involved with the development and maintenance of QuestCraft do not obtain, upload, or in any form collect user data, anonymous or not, and in turn do not sell or otherwise distribute user data.
            </div>
        </body>
    );
}
