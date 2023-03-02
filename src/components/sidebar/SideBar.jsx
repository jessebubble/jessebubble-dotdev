import { sideArray } from './sideArray'
import { Tab, Dialog } from '@headlessui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/jessebubble.dev.svg'

export default function SideBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
        <div className="flex flex-col items-center -mt-60 md:-mt-48">
            <div className="-mt-24 md:-mt-40">
                <Link to="/" className="">
                    <img
                        className="h-full w-full object-cover"
                        src="https://cdn.sanity.io/images/etrj839y/production/7171b4a3cf50e1f936911dd4d88a231750de6b07-500x500.svg"
                        alt="jessebubble logo"
                    />
                </Link>
            </div>
            <div className="lg:hidden flex -mt-20">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-evenly rounded-md p-2.5 text-logo-pink"
                    onClick={() => setMobileMenuOpen(true)} >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6 md:h-10 md:w-10" aria-hidden="true" />
                </button>
            </div>
            <Tab.Group className="hidden lg:flex lg:flex-col lg:text-lg lg:leading-8 lg:-mt-28">
                <Tab.List className="" aria-label="Sidebar">
                    {sideArray.map((item) => (   
                        <a href={item.href} key={item.name}>
                            <Tab key={item.name} className="ui-selected:text-logo-pink ui-not-selected:text-gray-300 flex ui-selected:hover:text-gray-300 ui-not-selected:hover:text-image-blue">
                                {item.name}
                            </Tab>
                        </a>
                    ))}
                </Tab.List>
            </Tab.Group>
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-slate-900 px-6 py-6 lg:hidden">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Jessebubble</span>
                            <img className="max-h-80 md:max-h-60 lg:max-h-40 w-full object-contain object-left" src={logo} alt="Viva Web Design" />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-300"
                            onClick={() => setMobileMenuOpen(false)} >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6 md:h-10 md:w-10" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {sideArray.map((item) => (
                                    <Link key={item.name} to={item.href} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-400/10"
                                        > {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </div>
        </>
    )
}