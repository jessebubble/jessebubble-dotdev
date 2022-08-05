import { Link } from 'react-router-dom';
import { ImInstagram, ImFacebook2, ImTwitter, ImGithub, ImLinkedin } from "react-icons/im";
import { IconContext } from 'react-icons';
import { Player } from '@lottiefiles/react-lottie-player';

export default function App() {
  return (
    <>
    <nav className='px-2 sm:px-4 py-2.5 sticky top-0 bg-gray-900'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <Link to='/' className='flex items-center'>
          <img src='./logo192.png' alt='collage icon' className='pr-1 h-8 sm:h-9' />
            <span className='self-center tracking-tight text-2xl xl:text-4xl font-semibold whitespace-nowrap text-white'>
              jesseBubble<span className='text-rose-400'>.dev</span>
            </span>
        </Link>
        <div className='w-full md:block md:w-auto'>
          <ul className='flex flex-row justify-center p-4 pt-4 md:space-x-8 md:text-lg md:font-medium md:border-0 '>
            <Link to='/portraits' 
                  className='block py-2 pr-4 pl-3 text-white md:p-0 hover:text-rose-400'
                  aria-current='page'>About
            </Link>
            <Link to='/pricing' 
                  className='block py-2 pr-4 pl-3 text-white md:p-0 hover:text-rose-400'
                  aria-current='page'>Portfolio
            </Link>
            <Link to='/contact' 
                  className='block py-2 pr-4 pl-3 text-white md:p-0 hover:text-rose-400'
                  aria-current='page'>Contact
            </Link>
          </ul>
        </div>
      </div>
    </nav>

    <main className="flex flex-col items-top">
      <div className='px-4 py-1 xl:py-2 bg-gray-900'>
        <h2 className='text-3xl pt-1 xl:pt-3 text-center tracking-tight font-light text-white md:text-6xl'>
          Inside The <span className='text-rose-400'>Bubble</span>
        </h2>
        <p className='text-lg pt-1 xl:pt-2 text-center tracking-tight text-white pb-1 xl:pb-2'>
          More than just a developer
        </p>
      </div>
    </main>
    <main className='bg-gradient-to-b from-white via-white to-cyan-200'>
      <div className='flex flex-col xl:flex-row w-full items-center justify-center pt-8 pb-8 sm:pb-6'>
          <div className='inline-grid grid-cols-2 items-center '> 
            <img src='../bubble.png' alt='portrait' className='xl:w-96 bg-amber-400 rotate-6' />
            <img src='../bubble.png' alt='portrait' className='xl:w-96 bg-emerald-400 hover:-rotate-6' />
            <img src='../bubble.png' alt='portrait' className='xl:w-96 bg-rose-400 hover:rotate-6' />
            <img src='../bubble.png' alt='portrait' className='xl:w-96 bg-fuchsia-400 -rotate-6' />
          </div>
          <div className='inline-grid grid-cols-1 '> 
          <div className='pt-6 lg:pl-36'>
            <h2 className='text-center text-3xl font-light tracking-tight md:text-6xl pb-4 xl:pb-8'>
              <span className='text-rose-500 '>Independent</span> doesn't mean alone
            </h2>
          <div className='pb-3 xl:pb-6 p-2 text-center xl:text-start shadow-sm shadow-gray-100 text-lg md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
          <div className='text-gray-900 hover:text-rose-500'>
            Your idea starts here @<span className='text-rose-500'>Viva Web Design</span>
          </div>
          </div>
          <div className='pb-3 xl:pb-6 p-2 text-center xl:text-start shadow-sm shadow-gray-100 bg-transparent text-lg md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
          <div className='text-gray-900 hover:text-rose-500 '>
            More than just a picture @<span className='text-rose-500'>Viva Portraits</span>
          </div>
          </div>
          <div className='pb-3 xl:pb-6 p-2 text-center xl:text-start shadow-sm shadow-gray-100 bg-transparent text-lg md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
          <div className='text-gray-900 hover:text-rose-500 '>
            Search Engine Optimization +<span className='text-rose-500'> Responsive </span> Wed Design
          </div>
          </div>
          <div className='pb-3 xl:pb-6 p-2 text-center xl:text-start shadow-sm shadow-gray-100 bg-transparent text-lg md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
          <div className='text-gray-900 hover:text-rose-500 '>
            Modern Web Technologies used with a<span className='text-rose-500'> Purpose</span>
          </div>
          </div>
          </div>
        </div>
      </div>
    </main>
    <main className='bg-gradient-to-t from-white via-white to-cyan-200'>
      <div className='flex flex-col xl:flex-row w-full items-center justify-center pb-8 sm:pb-6'>
        <div className='inline-grid grid-cols-1 '> 
          <div className='pt-4 lg:pl-32'>
            <h2 className='text-center xl:text-end text-3xl font-light tracking-tight md:text-6xl pb-4 xl:pb-8'>
              Your idea brought to<span className='text-sky-600 '> life</span>
            </h2>
          <div className='pb-3 xl:pb-6 p-2 text-center xl:text-end shadow-none shadow-gray-100 text-lg md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
          <div className='text-gray-900 hover:text-rose-500 '>
            I bring the following to every project:
          </div>
          </div>
          <div className='pb-3 xl:pb-6 p-2 text-center xl:text-end shadow-sm shadow-gray-100 bg-transparent text-lg md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
          <div className='text-gray-900 hover:text-rose-500 '>
           Dedication to<span className='text-sky-500'> Teamwork</span>
          </div>
          </div>
          <div className='pb-3 xl:pb-6 p-2 text-center xl:text-end shadow-sm shadow-gray-100 bg-transparent text-lg md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
          <div className='text-gray-900 hover:text-rose-500 '>
            <span className='text-sky-500'>Problem-solving </span>skills and perseverance
          </div>
          </div>
          <div className='pb-3 xl:pb-6 p-2 text-center xl:text-end shadow-sm shadow-gray-100 bg-transparent text-lg md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
          <div className='text-gray-900 hover:text-rose-500 '>
            Strong interpersonal and <span className='text-sky-500'> Communication</span> skills
          </div>
          </div>
        </div>
        </div>
        <div className='inline-grid grid-col items-center '> 
          <div className='overflow-hidden pt-3 xl:pl-36'>
            <Player
              src='https://assets3.lottiefiles.com/packages/lf20_rllvgcn2.json'
              className='xl:pb-2'
              background='transparent'
              loop={true}
              autoplay={true}
              >
            </Player>
          </div>
        </div>
      </div>
    </main>
    <main className="flex flex-col">
      <div className="px-4 py-10 xl:py-11 bg-black">
        <h1 className="text-3xl md:text-4xl xl:text-5xl text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-teal-400 to-rose-400">
          Hello World
        </h1>
      </div>
    </main>
    <main className='bg-gradient-to-t from-white via-white to-cyan-200'>
      <div className='flex flex-col xl:flex-row w-full items-center justify-start pb-8 sm:pb-6'>
        <div className='inline-grid grid-col items-center '> 
          <div className='overflow-hidden pt-2 xl:px-2 xl:py-2'>
            <Player
              src='https://assets3.lottiefiles.com/private_files/lf30_igfaivqx.json'
              className='xl:pb-2 '
              background='transparent'
              loop={true}
              autoplay={true}
              >
            </Player>
          </div>
        </div>
        <div className='inline-grid grid-cols-1 '> 
          <div className='pt-4 '>
            <h2 className='text-center xl:text-start text-3xl font-light tracking-tight md:text-6xl pb-4 xl:pb-8'>
              Your idea brought to<span className='text-sky-600 '> life</span>
            </h2>
          <div className='pb-3 xl:pb-6 p-2 text-center xl:text-start shadow-none shadow-gray-100 text-lg md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
          <div className='text-gray-900 hover:text-rose-500 '>
            I bring the following to every project:
          </div>
          </div>
          <div className='pb-3 xl:pb-6 p-2 text-center xl:text-start shadow-sm shadow-gray-100 bg-transparent text-lg md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
          <div className='text-gray-900 hover:text-rose-500 '>
           Dedication to<span className='text-sky-500'> Teamwork</span>
          </div>
          </div>
          <div className='pb-3 xl:pb-6 p-2 text-center xl:text-start shadow-sm shadow-gray-100 bg-transparent text-lg md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
          <div className='text-gray-900 hover:text-rose-500 '>
            <span className='text-sky-500'>Problem-solving </span>skills and perseverance
          </div>
          </div>
          <div className='pb-3 xl:pb-6 p-2 text-center xl:text-start shadow-sm shadow-gray-100 bg-transparent text-lg md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
          <div className='text-gray-900 hover:text-rose-500 '>
            Strong interpersonal and <span className='text-sky-500'> Communication</span> skills
          </div>
          </div>
        </div>
        </div>
      </div>
    </main>

    <main className="flex flex-col items-top">
      <div className="bg-gray-900 px-4 py-10 xl:py-11">
        <h2 className='items-center text-center text-4xl font-light tracking-tight md:text-6xl md:pl-1 lg:pb-4'>
            <span className="block text-teal-300 ">The Future is Animated</span>
        </h2>
        <div className='pt-8 pb-8 flex justify-around'>
          <div className='pb-3 p-2 items-center text-center shadow-md lg:shadow-lg shadow-indigo-300 border-2 border-white px-5 md:px-7 bg-black text-2xl md:text-4xl font-lighter lg:p-3
                            transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-white hover:border-black'>
            <Link to="/contact" className='text-rose-400 hover:text-gray-900'>
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
    </main>

    <footer className='bg-gray-900 border-gray-200 px-2 sm:px-4 py-2.5'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <Link to='/' className='flex items-center'>
        <img src='./logo192.png' alt='collage icon' className='pr-1 h-8 sm:h-9' />
            <span className='self-center text-2xl xl:text-4xl font-semibold whitespace-nowrap text-white'>
              jesseBubble<span className='text-rose-400'>.dev</span>
            </span>
        </Link>
        <div className='w-full md:block md:w-auto' id='navbar-default'>
          <ul className='flex flex-row justify-center p-4 pt-4
                          md:space-x-8 md:text-lg md:font-medium md:border-0 '>
            <IconContext.Provider 
              value={{ className: 'text-white hover:text-rose-400 h-6 w-8' }}>
              <Link to='/portraits' className='block py-2 pr-4 pl-3 md:p-0 hover:underline'>
                <ImGithub />
              </Link>
              <Link to='/pricing' className='block py-2 pr-4 pl-3 md:p-0 hover:underline'>
                <ImTwitter />
              </Link>
              <Link to='/contact' className='block py-2 pr-4 pl-3 md:p-0 hover:underline'>
                <ImInstagram />
              </Link>
              <Link to='/contact' className='block py-2 pr-4 pl-3 md:p-0 hover:underline'>
                <ImFacebook2 />
              </Link>
              <Link to='/contact' className='block py-2 pr-4 pl-3 md:p-0 hover:underline'>
                <ImLinkedin />
              </Link>
            </IconContext.Provider>
          </ul>
        </div>
    </div>  
    </footer>
    </>
  );
}