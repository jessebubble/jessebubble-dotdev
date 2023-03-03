import { sideArray } from './sideArray'
import { Tab } from '@headlessui/react'
import { Link } from 'react-router-dom'

export default function SideBar() {

    return (
        <>
        <div className="flex flex-col items-center justify-center">
            <div className="-mt-96">
                <Link to="/" className="">
                    <img
                        className="h-full w-full object-cover"
                        src="https://cdn.sanity.io/images/etrj839y/production/7171b4a3cf50e1f936911dd4d88a231750de6b07-500x500.svg"
                        alt="jessebubble logo"
                    />
                </Link>
            </div>
            <Tab.Group className="flex lg:flex-col items-center gap-6 text-lg md:text-xl lg:text-lg font-semibold leading-8 -mt-16 md:-mt-24">
                <Tab.List className="" aria-label="Sidebar">
                    {sideArray.map((tab) => ( 
                        <a href={tab.href}>  
                            <Tab key={tab.name} className="ui-selected:text-logo-pink ui-not-selected:text-gray-300">
                                {tab.name}
                            </Tab>
                        </a>
                    ))}
                </Tab.List>
            </Tab.Group>
        </div>
        </>
    )
}