export default function DeveloperToolsRoute() {
    
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-base font-semibold text-logopink">
                        Full-Stack Web Development
                    </h2>
                    <p className="mt-6 text-3xl font-bold tracking-tight leading-8 text-gray-900 sm:text-4xl">
                        The tools behind the fast, user-friendly, easily manageable online experiences.
                    </p>
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
                    <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                        <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">Styling Libraries</p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-gray-900">TailwindCSS</p>
                            <p className="mt-2 text-base leading-7 text-gray-600">
                                HeadlessUI, HeroIcons and TailwindUI are used to easily style projects while keeping a consistent design system at all times.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                        <p className="flex-none text-3xl font-bold tracking-tight text-white">Frameworks</p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-white">
                                Remix and Next.js
                            </p>
                            <p className="mt-2 text-base leading-7 text-gray-400">
                                Full-stack frameworks built on top of React like Next.js and Remix are used to produce fast and user-friendly websites, which can also fetch content from headless tools like Sanity CMS.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                        <p className="flex-none text-3xl font-bold tracking-tight text-white">The Back-End</p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-white">Powerful, flexible, scalable digital experiences</p>
                            <p className="mt-2 text-base leading-7 text-indigo-200">
                                Tools such as Supabase, Algolia, Auth0 and Stripe aim to make it easy for developers like me 
                                to prevent unauthorized access and build real-time web applications without the need to set up and manage our own servers and infrastructure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}  