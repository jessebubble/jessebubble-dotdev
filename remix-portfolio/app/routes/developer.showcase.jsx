import { Globe, Github } from "~/components/icons";

const showcaseArray = [
    {
        name: 'Viva Web Design',
        description: "Fast responsive website built with dynamic UI, features a fully functional web store that queries data from a headless cms and includes a secure checkout experience.",
        imageUrl:
            "https://cdn.sanity.io/images/etrj839y/production/f348be3278254433173339a7f0ff0ecfe390d516-500x500.svg",
        githubUrl: 'https://github.com/jessebubble/viva-remix',
        webUrl: 'https://www.vivawebdesign.dev/',
    },
    {
        name: 'Loteria Card Game',
        description: "Fast responsive website built with dynamic UI, features a fully functional web store that queries data from a headless cms and includes a secure checkout experience.",
        imageUrl:
            "https://cdn.sanity.io/images/etrj839y/production/1dc77f5976823c4738a23503003794f3da51c0fb-1024x768.svg",
        githubUrl: 'https://github.com/jessebubble/nology-loteria-game',
        webUrl: 'https://jessebubble.github.io/nology-loteria-game/',
    },
    {
        name: 'Yung Guardian',
        description: "Fast responsive website built with dynamic UI, features a fully functional web store that queries data from a headless cms and includes a secure checkout experience.",
        imageUrl:
            "https://cdn.sanity.io/images/etrj839y/production/08f140187eecde4fbfe4fddb0a08f7e60be4a6f7-500x500.svg",
        githubUrl: 'https://github.com/jessebubble/yung-guardian',
        webUrl: 'https://www.yungguardian.com/',
    },
    {
        name: 'Alamo Welding',
        description: "Fast responsive website built with dynamic UI, features a fully functional web store that queries data from a headless cms and includes a secure checkout experience.",
        imageUrl:
            "https://cdn.sanity.io/images/etrj839y/production/10908078b13bba39c7ca2f61a6edbefbcaa35759-500x500.svg",
        githubUrl: 'https://github.com/jessebubble/alamo-welding',
        webUrl: 'https://www.alamowelding.com/',
    },
]
  
export default function ShowcaseIndexRoute() {

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-lg font-semibold text-logopink">Developer Showcase</h2>
                    <p className="mt-4 leading-8 text-gray-900 text-3xl font-bold tracking-tight sm:text-4xl">
                        Building fast, user-friendly, easily manageable online experiences
                    </p>
                </div>
                <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8" >
                    {showcaseArray.map((item) => (
                        <li key={item.name} className="rounded-2xl bg-slate-900 px-8 py-10">
                            <img className="mx-auto h-48 w-48 md:h-56 md:w-56" src={item.imageUrl} alt="viva web design logo" />
                            <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{item.name}</h3>
                            <p className="text-sm leading-6 text-gray-400">{item.description}</p>
                            <ul className="mt-6 flex justify-center gap-x-6">
                                <li>
                                    <a href={item.githubUrl} className="text-gray-400 hover:text-indigo-500">
                                        <span className="sr-only">Github</span>
                                        <Github className="h-5 w-5" />
                                    </a>
                                </li>
                                <li>
                                    <a href={item.webUrl} className="text-gray-400 hover:text-indigo-500">
                                        <span className="sr-only">Website</span>
                                        <Globe className="h-5 w-5"/>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}