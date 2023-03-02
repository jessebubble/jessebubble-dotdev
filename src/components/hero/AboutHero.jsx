import SideBar from "../sidebar/SideBar"
  
  export default function AboutHero() {
      
    return (
        <div className="bg-slate-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-36">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-y-16 gap-x-8 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-4">
                        <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                            <SideBar />
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="text-base leading-7 text-gray-400 lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-image-blue">Inside the bubble</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    About me
                                </h1>
                                <div className="max-w-xl">
                                    <p className="mt-6">
                                        Jesse is a San Antonio native with strong interpersonal and communication skills, dedicated to teamwork and collaboration.
                                    </p>
                                    <p className="mt-8">
                                        I'm here to play a small part in helping the startup community take control of their content by creating a platform that gives them access to made from scratch code that will create fast, SEO-optimized, user-friendly and easily manageable websites.
                                    </p>
                                    <p className="mt-8">
                                        Currently working with _nology, collaborating with developers and following best practices to automate infrastructure updates using a Git workflow with continuous integration (CI) and continuous delivery (CI/CD).
                                    </p>
                                </div>
                                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                    <a href="mailto:jesse@vivawebdesign.dev" className="rounded-md bg-logo-pink px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-image-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" >
                                        Let's connect <span aria-hidden="true" className="text-color-gray-900">✉</span>
                                    </a>
                                    <a href="https://docs.google.com/document/d/1Ww0atp3OSEnqGajVBY_iBS2Ku4i8frrvE_MDf5SA0bY/export?format=pdf" className="text-base font-semibold leading-7 text-white hover:text-image-blue">
                                        View my resume <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}