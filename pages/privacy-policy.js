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
                This privacy policy will reference of the following terms: QuestCraft (the "App"), QCXR (the "Developer"), the end-user interacting with the App (the "User"), information about your machine that is running the App (the "Device") and finally, third party account services not owned or operated by the Developer ("MSA", "Microsoft Authentication").

1.0: The App requires a certain baseline set of information about the User and their Device to function for its intended purposes. However, the Developer does not receive or store this information in any capacity, it is saved only on-device unless the User purposefully uploads and sends logging information for debugging purposes described in section 1.1.

1.0a: The App automatically collects a limited amount of info about the User's Device. It collects the user IP, device model, device name, operating system version, and the current date and time.

1.0b: The App will prompt for an extremely limited amount of data about the User. It will prompt for the following: display name (pseudonymous, and is used only to let Users choose a custom identify for others to see without revealing their true identity) and their pronoun (optional and is used exclusively for automations and automated actions, does not need to conform to the User's real identity)

1.1: The "Need Help" function of the App will send the collected info about the User's Device and the User game activity to an external non-developer owned website known as "MCLogs" or "mclo.gs. Once this data is sent to the "Need Help" external service, the Developer and App have no authority over how this data is handled. The User should read the privacy policy of the MCLogs ("mclo.gs") service. Finally, the User ultimately has control over where and if the data is sent, and should exercise reasonable caution should they choose to send the data.

1.2: Microsoft may collect some non-identifying information about your device, including (but not limited to) crash reports, installs per geographic region,  or what type of device you are using. Please see Microsofts Authentication and account privacy policies for more details.
Some of this Microsoft.-collected information is accessible to QCXR for debugging and statistics purposes only, and it cannot be used to identify any user. This information is also not shared with any other entity.

Privacy policy updated on February 22nd, 2025.
            </div>
        </body>
    );
}
