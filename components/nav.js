export const Nav = () => (
    <nav x-data="{ isOpen: false }" className="bg-white  dark:bg-gray-800">
        <div className="container px-6 py-4 max-w-6xl mx-auto">
            <div className="lg:flex lg:items-center">
                <div className="flex items-center justify-between">
                    <div>
                        <a className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="/">
                            QuestCraft
                        </a>
                    </div>
                </div>

                <div className=" inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between">
                    <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                        <a href="https://sidequestvr.com/app/7150/" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">
                            Get on SideQuest
                        </a>
                        <a href="/support" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">
                            Support
                        </a>
                    </div>

                    <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
                        <a href="https://discord.com/invite/zVkMXSY78D" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Discord">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d=d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"
                                    fill="currentcolor"
                                />
                            </svg>
                        </a>

                        <a href="https://github.com/QuestCraftPlusPlus/QuestCraft/" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Github">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                                    fill="currentcolor"
                                />
                            </svg>
                        </a>

                        <a href='https://patreon.com/questcraftxr' className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label='Patreon'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.7857 16.8055C18.7701 16.8055 22 13.5756 22 9.59124C22 5.6069 18.7701 2.37695 14.7857 2.37695C10.8014 2.37695 7.57143 5.6069 7.57143 9.59124C7.57143 13.5756 10.8014 16.8055 14.7857 16.8055Z" fill="black"/>
                                <path d="M5.52622 2.37695H2V21.623H5.52622V2.37695Z" fill="black"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="py-4">
                <hr />
                {/* absolute top right */}
                <div className="relative w-30 h-30 invisible sd:invisible md:invisible lg:visible">
                    <img className="absolute -top-4 -right-20 z-10 w-72 bg-transparent" src="/image/stevefalling.png" />
                </div>
            </div>
        </div>
    </nav>
);
