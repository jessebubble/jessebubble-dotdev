import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../jessebubble2.svg'


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <main className="bg-slate-900">
        <div className="flex flex-row items-center justify-evenly lg:justify-around">
            <div className="">
              <Link to='/'>
                <Logo className='w-60 lg:w-32 h-full'/> 
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center justify-evenly tracking-tight antialiased gap-4 md:gap-6">
                <a href="/portfolio" className="hover:text-indigo-600 text-white text-md md:text-lg font-medium">
                  devPortfolio
                </a>
                <a href="/blog" className="hover:text-indigo-600 text-white text-md md:text-lg  font-medium">
                  Blog
                </a>
                <a href="/contact" className="hover:text-indigo-600 text-white text-md md:text-lg  font-medium">
                  Contact
                </a>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 border-2 border-white inline-flex items-center justify-center p-2 rounded-md text-white hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/portfolio" className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  devPortfolio
                </a>
                <a href="/blog" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Blog
                </a>
                <a href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Contact
                </a>
                
              </div>
            </div>
          )}
        </Transition>
      </main>
    </>
  );
}
