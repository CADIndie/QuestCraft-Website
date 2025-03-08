import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>QuestCraft | Privacy Policy</title>
                <meta
                    name="description"
                    content="Privacy policy for QuestCraft app, utilizing Vivecraft and Pojlib on Oculus Quest Headsets."
                />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="QuestCraft | Privacy Policy" />
                <meta
                    property="og:description"
                    content="Privacy policy for QuestCraft, outlining the data collection practices for supporting the app."
                />
                <meta property="og:url" content="https://questcraft.org/" />
                <meta property="og:site_name" content="QuestCraft" />
                <link rel="canonical" href="https://questcraft.org/" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="twitter:url" content="https://questcraft.org/" />
                <meta name="twitter:title" content="QuestCraft | Privacy Policy" />
                <meta
                    name="twitter:description"
                    content="Privacy policy for QuestCraft, outlining the data collection practices for supporting the app."
                />
                <meta name="twitter:card" content="summary" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container px-6 py-10 mx-auto max-w-6xl">
                <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
                <article className="prose dark:prose-dark">
                    <p>
                        This privacy policy will reference the following terms: QuestCraft (the
                        &quot;App&quot;), QCXR (the &quot;Developer&quot;), the end-user interacting with
                        the App (the &quot;User&quot;), information about your machine that is running the
                        App (the &quot;Device&quot;), and finally, third-party account services not owned or
                        operated by the Developer (&quot;MSA&quot;, &quot;Microsoft Authentication&quot;,
                        &quot;MCLogs&quot;, &quot;Meta&quot;).
                    </p>
                    <p>
                        <strong>1.0:</strong> The App requires a certain baseline set of information about the
                        User and their Device to function for its intended purposes. The developer may be sent
                        some information explained in 1.0a and 1.0b, and external developers in 1.1 and 1.2.
                    </p>
                    <p>
                        <strong>1.0a:</strong> The App may automatically collect a limited amount of info about the
                        User&apos;s Device, including (but not limited to) the Device model, operating system
                        version, current time and date, and crashes.
                    </p>
                    <p>
                        <strong>1.0b:</strong> The App may not collect this data directly and may collect this
                        information from Meta. To see other information that is not shared with the developer and
                        sent to Meta or other device companies, please read their policies.
                    </p>
                    <p>
                        <strong>1.1:</strong> The &quot;Need Help&quot; function of the App will send some of the
                        collected info about the User&apos;s game activity and IP address to an external non-developer
                        owned website known as &quot;MCLogs&quot; or &quot;mclo.gs&quot;. Once this data is sent to
                        the &quot;Need Help&quot; external service, the Developer and App have no authority over how
                        this data is handled. The User should read the privacy policy of the MCLogs (&quot;mclo.gs&quot;)
                        service. Finally, the User ultimately has control over whether the data is sent and should
                        exercise reasonable caution should they choose to send the data.
                    </p>
                    <p>
                        <strong>1.2:</strong> Microsoft may collect some non-identifying information about your device,
                        including (but not limited to) crash reports, installs per geographic region, or what type of
                        device you are using. Please see Microsoft&apos;s Authentication and account privacy policies
                        for more details. Some of this Microsoft-collected information may be accessible to QCXR.
                    </p>
                    <p>Privacy policy updated on February 22nd, 2025.</p>
                </article>
            </main>
        </>
    );
}