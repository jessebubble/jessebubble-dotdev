import { Fragment } from 'react'
import { Link } from "@remix-run/react"
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Github, Linkedin, Mail } from "~/components/icons"

const routesArray = [
  {
    name: "About JesseBubble",
    description: "From the world of sales and service to living life as a web developer",
    href: "/developer",
  },
  {
    name: "Developer Showcase",
    description: "Building fast, user-friendly, easily manageable online experiences",
    href: "/developer/showcase",
  },
  { name: "Full-Stack Tools", 
    description: "The full-stack tools behind the online experiences I build", 
    href: "/developer/tools", 
},
  {
    name: "Developer Blog",
    description: "Powered by Sanity.io, using AI tools to create web development content",
    href: "/developer/blog",
  },
]
const followArray = [
  { name: 'Github', href: 'https://github.com/jessebubble', icon: Github },
  { name: 'Linkedin', href: 'https://www.linkedin.com/in/jessebubble', icon: Linkedin },
  { name: 'Email', href: 'mailto:jesse@vivawebdesign.dev', icon: Mail },
]

export default function GlobalNavbar() {

    return (
        <Popover className="relative isolate z-50 shadow">
            <div className="bg-slate-900 py-5">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-white outline-none">
                    <Link to="/">
                        <img 
                            className="max-h-80 md:max-h-60 lg:max-h-32 w-full object-contain" 
                            src="https://cdn.sanity.io/images/etrj839y/production/df1f0ea5979d432f18c5f5c9348ed7bd985b3fd6-500x500.svg"
                            alt="jessebubble logo" 
                            />
                    </Link>
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                </Popover.Button>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
            >
                <Popover.Panel className="sm:absolute sm:inset-x-0 sm:top-0 sm:-z-10 bg-slate-900 sm:pt-16 sm:shadow-lg">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
                        {routesArray.map((item) => (
                            <div key={item.name} className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-slate-700/10 sm:flex-col sm:p-6 sm:mt-20" >
                                <a href={item.href} className="font-semibold text-white hover:text-logopink">
                                    {item.name}
                                    <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-gray-300">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-slate-50">
                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 divide-y divide-slate-900/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-x sm:border-slate-900/5">
                                {followArray.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 sm:justify-center sm:px-0"
                                    >
                                        <item.icon className="h-5 w-5 flex-none text-logopink" aria-hidden="true" />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}