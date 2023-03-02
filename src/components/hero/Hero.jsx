import { heroArray } from "./heroArray"
import SideBar from "../sidebar/SideBar"
  
  export default function Hero() {
      
    return (
        <div className="bg-slate-900 py-24 md:py-40 flex items-center justify-center ">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 md:px-8 md:grid-cols-3">
                <div className="mx-auto max-w-2xl md:mx-0 flex flex-col items-center justify-center">
                    <SideBar />
                </div>
                <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 md:mx-0 md:max-w-none md:gap-x-8 md:col-span-2">
                    {heroArray.map((person) => (
                        <li key={person.name}>
                            <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="portrait" />
                            <h3 className="mt-6 text-lg font-semibold leading-8 text-white">{person.name}</h3>
                            <p className="text-base leading-7 text-gray-400">{person.role}</p>
                            <p className="mt-4 text-base leading-7 text-gray-300">{person.bio}</p>
                            <ul className="mt-6 flex gap-x-6">
                                <li>
                                    <h2 className="text-base font-semibold text-image-blue">
                                        Follow me on <span aria-hidden="true">→</span>
                                    </h2>
                                </li>
                                <li>
                                    <a href={person.twitterUrl} className="text-gray-400 hover:text-image-blue">
                                        <span className="sr-only">Twitter</span>
                                        <svg className="h-6 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href={person.githubUrl} className="text-gray-400 hover:text-image-blue">
                                        <span className="sr-only">Github</span>
                                        <svg className="h-6 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href={person.linkedinUrl} className="text-gray-400 hover:text-image-blue">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg className="h-6 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                                        </svg>
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