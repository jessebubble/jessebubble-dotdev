import { Link } from 'react-router-dom';
import { ImInstagram, ImFacebook2, ImTwitter, ImGithub, ImLinkedin } from "react-icons/im";
import { IconContext } from 'react-icons';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Portfolio() {
  return (
    <>
     <nav className='px-2 sm:px-4 py-2.5 sticky top-0 bg-black'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <Link to='/' className='flex items-center'>
          <img src='./logo192.png' alt='collage icon' className='pr-1 h-8 sm:h-9' />
            <span className='self-center tracking-tight antialiased text-2xl xl:text-4xl font-semibold whitespace-nowrap text-white'>
              jesseBubble<span className='text-rose-500'>.dev</span>
            </span>
        </Link>
        <div className='w-full md:block md:w-auto'>
          <ul className='flex flex-row justify-center tracking-tight antialiased p-4 pt-4 md:space-x-8 md:text-lg md:font-medium md:border-0 '>
            <Link to='/about' 
                  className='block py-2 pr-4 pl-3 text-white md:p-0 hover:text-rose-400'
                  aria-current='page'>About
            </Link>
            <Link to='/portfolio' 
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

    <main className="flex flex-col">
      <div className='py-2 xl:py-3 bg-white'>
        <h2 className='text-3xl md:text-4xl xl:text-6xl pt-1 xl:pt-3 text-center tracking-tight subpixel-antialiased font-light text-gray-900 '>
          Web Design + 
          <span className='text-rose-500'> Development</span> 
        </h2>
        <p className='text-lg pt-1 xl:pt-2 text-center tracking-tight subpixel-antialiased text-gray-900 pb-1 xl:pb-2'>
          More than just a portfolio
        </p>
      </div>
    </main>
    <main className='bg-gradient-to-t from-rose-500 via-rose-300 to-white'>
      <div className='flex flex-col xl:flex-row w-full items-center justify-center pb-4'>
          <div className='w-9/12 xl:w-5/12 inline-grid grid-col items-center '> 
          <div className='overflow-hidden pt-4 xl:p-12 xl:px-20'>
              <Player
              src='https://assets7.lottiefiles.com/packages/lf20_4tcribvp.json'
              className='xl:pb-2'
              background='transparent'
              loop={true}
              autoplay={true} >
              </Player>
          </div>
          </div>
          <div className='inline-grid grid-col'> 
              <div className='pt-4 xl:pr-36'>
                  <h2 className='text-center text-3xl xl:text-5xl pb-1 xl:pb-2 font-light subpixel-antialiased tracking-tight text-gray-900'>
                    <span className='text-rose-500'>VIVA </span>Web Design
                  </h2>
                  <p className='pb-1 xl:pb-3 text-center text-lg xl:text-xl tracking-tight subpixel-antialiased text-gray-900 font-light'>
                    Built with React, TailwindCSS and LottieFiles
                    <br />
                    Marketing and Design company promoting Motion
                    <br />
                    <a href='https://www.vivawebdesign.dev'><span className='text-white'>https://www.vivawebdesign.dev</span></a>
                  </p>
              <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-current text-lg md:text-2xl font-medium lg:p-5
                          transform hover:translate-y-4 transition duration-300 ease-in-out'>
              <div className='text-gray-900 hover:text-rose-500 '>
                Located in San Antonio, Texas
              </div>
              </div>
              <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-current bg-transparent text-lg md:text-2xl font-medium lg:p-5
                          transform hover:translate-y-4 transition duration-300 ease-in-out'>
              <div className='text-gray-900 hover:text-rose-500 '>
                Marketing and Advertising Agency
              </div>
              </div>
              <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-current bg-transparent text-lg md:text-2xl font-medium lg:p-5
                          transform hover:translate-y-4 transition duration-300 ease-in-out'>
              <div className='text-gray-900 hover:text-rose-500 '>
                Your idea brought to life
              </div>
              </div>
              <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-current bg-transparent text-lg md:text-2xl font-medium lg:p-5
                          transform hover:translate-y-4 transition duration-300 ease-in-out'>
              <div className='text-gray-900 hover:text-rose-500 '>
                Motion with a purpose
              </div>
              </div>
              </div>
          </div>
      </div>
    </main>
    <main className='bg-gradient-to-t from-lime-200 via-lime-400 to-rose-500'>
      <div className='flex flex-col xl:flex-row items-center justify-center pt-2 pb-2 md:pb-4 px-10 md:px-60 xl:px-80'>
        <div className='inline-grid grid-col items-center '> 
          <div className='overflow-hidden pt-2'>
            <img src='../bianca-berg-unsplash.png' alt='portrait' className='xl:w-8/12 xl:pl-4 xl:rounded-lg hover:rotate-6' />
          </div>
        </div>
        <div className='inline-grid grid-col w-full'> 
          <div className='pb-4'>
            <h2 className='text-center text-3xl md:text-4xl xl:text-5xl font-light tracking-tight subpixel-antialiased pb-1 xl:pb-2 -py-1'>
              <span className='text-rose-500'>VIVA</span> Portraits
            </h2>
            <p className='pb-1 xl:pb-2 text-center text-lg xl:text-xl tracking-tight subpixel-antialiased text-gray-900 font-light'>
              Built with React, TailwindCSS and images from Unsplash
              <br />
              New portrait studio located in San Antonio, Texas
              <br />
              <a href='https://www.vivaportraits.com'><span className='text-white'>https://www.vivaportraits.com</span></a>
            </p>
            <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-current text-xl md:text-2xl font-medium lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
            <div className='text-gray-900 hover:text-rose-500'>
              More than just a picture
            </div>
            </div>
            <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-current bg-transparent text-xl md:text-2xl font-medium lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
            <div className='text-gray-900 hover:text-rose-500 '>
              More than just a memory
            </div>
            </div>
            <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-current bg-transparent text-xl md:text-2xl font-medium lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
            <div className='text-gray-900 hover:text-rose-500 '>
              More than just a moment 
            </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <main className="flex flex-col items-top">
      <div className="bg-black px-4 py-10 xl:py-11">
        <h2 className='items-center text-center text-4xl font-light tracking-tight subpixel-antialiased md:text-6xl md:pl-1 lg:pb-4'>
            <span className="block text-teal-300 ">The Future is Animated</span>
        </h2>
        <div className='pt-8 pb-8 flex justify-around'>
          <div className='tracking-tight subpixel-antialiased pb-3 p-2 items-center text-center shadow-md lg:shadow-lg shadow-indigo-300 border-2 border-white px-5 md:px-7 bg-black text-2xl md:text-4xl font-light lg:p-3
                            transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-white hover:border-black'>
            <Link to="/contact" className='text-rose-500 hover:text-gray-900'>
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
    </main>

    <footer className='bg-black border-gray-200 px-2 sm:px-4 py-2.5'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <Link to='/' className='flex items-center'>
        <img src='./logo192.png' alt='react icon' className='pr-1 h-8 sm:h-9' />
            <span className='self-center text-2xl xl:text-4xl font-semibold whitespace-nowrap text-white tracking-tight subpixel-antialiased'>
              jesseBubble<span className='text-rose-500'>.dev</span>
            </span>
        </Link>
        <div className='w-full md:block md:w-auto' id='navbar-default'>
          <ul className='flex flex-row justify-center p-4 pt-4
                          md:space-x-8 md:text-lg md:font-medium md:border-0 '>
            <IconContext.Provider 
              value={{ className: 'text-white hover:text-rose-400 h-6 w-8' }}>
              <a href='https://github.com/jessebubble' className='block py-2 pr-4 pl-3 md:p-0 hover:underline'>
                <ImGithub />
              </a>
              <a href='https://twitter.com/jessebubble' className='block py-2 pr-4 pl-3 md:p-0 hover:underline'>
                <ImTwitter />
              </a>
              <a href='https://www.instagram.com/jessebubble' className='block py-2 pr-4 pl-3 md:p-0 hover:underline'>
                <ImInstagram />
              </a>
              <a href='https://www.facebook.com/jessebubble' className='block py-2 pr-4 pl-3 md:p-0 hover:underline'>
                <ImFacebook2 />
              </a>
              <a href='https://www.linkedin.com/in/jessebubble' className='block py-2 pr-4 pl-3 md:p-0 hover:underline'>
                <ImLinkedin />
              </a>
            </IconContext.Provider>
          </ul>
        </div>
    </div>  
    </footer>
    </>
  );
}