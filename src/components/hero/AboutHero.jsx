import SideBar from "../sidebar/SideBar"
  
  export default function AboutHero() {
      
    return (
        <div className="bg-slate-900 py-24 md:py-40 flex items-center justify-center ">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 md:px-8 md:grid-cols-3">
                <div className="mx-auto max-w-2xl md:mx-0 flex flex-col items-center justify-center">
                    <SideBar />
                </div>
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
                                I'm here to play a small part in helping the startup community gain take control of their content by creating a platform that gives them access to made from scratch code, modern web design and animation.
                            </p>
                            <p className="mt-8">
                                Currently working with _nology, collaborating with developers and following best practices to automate infrastructure updates using a Git workflow with continuous integration (CI) and continuous delivery (CI/CD).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}