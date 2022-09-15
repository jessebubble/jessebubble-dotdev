import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import Nav from './components/navbar';
import Hero from './components/hero';
import Footer from './components/footer';

export default function App() {
  return (
    <>
    < Nav />
    < Hero />

    <main className="bg-slate-900 pt-4 pb-4">
      <div className="p-4 text-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl tracking-tight text-white font-medium antialiased">
          dev<span className='text-cyan-600'>Portfolio</span>
        </h1>
        <p className='text-lg text-indigo-600'>design with a purpose</p>
      </div>
    </main>

    <main className='bg-slate-900'>
      <div className='flex flex-col lg:flex-row items-center justify-evenly p-4 md:p-5 lg:p-8'>
        <div className='bg-slate-300 border-b-2 border-gray-900 lg:border-0'>
          <div className=''> 
            <img 
              src='./vwd2.png'
              alt='logo'
              className='w-64 md:w-96 lg:w-128 opacity-80'
            />
          </div>
          <div className='p-4 -mt-12 lg:mt-0'>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight antialiased text-gray-900">
              Web Design and Marketing Agency <span className="block text-indigo-600 text-lg md:text-xl">located in San Antonio, TX</span>
            </h1>
            <p className="tracking-tight antialiased mt-3 md:mt-5 text-gray-900 max-w-xl text-lg md:text-xl">
              Built using React, TailwindCSS, LottieFiles and Figma. Domain purchsed through google and the site is hosted on Vercel
            </p>
            <div className="mt-5 flex items-center justify-start gap-4">
              <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-gray-900 bg-transparent text-xl md:text-2xl font-light
                                transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-cyan-500 hover:border-white'>
                <Link to="https://www.vivawebdesign.dev" className='text-gray-900'>
                  View Site 
                </Link>
              </div>
              <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-gray-900 bg-transparent text-xl md:text-2xl font-light
                                transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-cyan-500 hover:border-white'>
                <Link to="https://github.com/jessebubble/viva-portfolio" className='text-gray-900'>
                  View Code 
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-slate-300'>
          <div className=''> 
            <img 
              src='./vp2.png'
              alt='logo'
              className='w-64 md:w-96 opacity-80'
            />
          </div>
          <div className='p-4 -mt-12 lg:mt-0'>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight antialiased text-gray-900">
              Community Driven Portrait Studio  <span className="block text-indigo-600 text-lg md:text-xl">located in San Antonio, TX</span>
            </h1>
            <p className="tracking-tight antialiased mt-3 md:mt-5 text-gray-900 max-w-xl text-lg md:text-xl">
              Built using React, TailwindCSS, Figma and license free images from Unsplash. Domain purchsed through google and hosted on Vercel
            </p>
            <div className="mt-5 flex items-center justify-start gap-4">
              <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-gray-900 bg-transparent text-xl md:text-2xl font-light
                                transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-amber-600 hover:border-white'>
                <Link to="https://www.vivaportraits.com" className='text-gray-900'>
                  View Site 
                </Link>
              </div>
              <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-gray-900 bg-transparent text-xl md:text-2xl font-light
                                transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-amber-600 hover:border-white'>
                <Link to="https://github.com/jessebubble/viva-portraits" className='text-gray-900'>
                  View Code 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <main className="bg-slate-900">
      <div className="flex items-center justify-center pt-4 lg:pt-16 pb-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl tracking-tight text-white font-light">
          More Than Just A <span className='text-emerald-500'>Contact</span>
        </h1>
      </div>
    </main>
    <main className='bg-gradient-to-b from-slate-900 to-fuchsia-300'>
      <div className='flex flex-col lg:flex-row w-full items-center justify-center pb-4'>
          <div className='w-9/12 lg:w-4/12'> 
              <Player
              src='https://assets1.lottiefiles.com/private_files/lf30_ies8kilu.json'
              className=''
              background='transparent'
              loop={true}
              autoplay={true} >
              </Player>
          </div>
          <div className=''>
            <h2 className='text-center text-3xl xl:text-5xl font-bold subpixel-antialiased tracking-tight text-white'>
              The Future is <span className='text-emerald-500'>Transparency</span>
            </h2>
            <form 
              className='space-y-6 pt-4' 
              action='#' 
              method='POST' >
              <div> 
                <input 
                  name='firstname' 
                  id='firstname' 
                  placeholder='First and Last Name'
                  className='w-full bg-transparent placeholder-slate-400 text-white border-b-2 text-lg p-2.5' 
                  required   
                />
              </div>
              <div>
                <input 
                  type='email' 
                  name='email' 
                  id='email' 
                  placeholder='Your Email'
                  className='w-full bg-transparent placeholder-slate-400 text-white border-b-2 text-lg p-2.5' 
                  required />
              </div>
              <div>
                <input 
                  name='message' 
                  id='message' 
                  placeholder='Share some info about your idea'
                  className='w-full bg-transparent placeholder-slate-400 text-white border-b-2 text-lg p-2.5' 
                  required />
              </div>
              <button  
                className='tracking-tight subpixel-antialiased p-2 border-white bg-slate-900 text-xl md:text-2xl font-light
                transform hover:translate-y-4 transition duration-300 ease-in-out text-white hover:bg-white hover:border-slate-900 hover:text-gray-900'>
                Submit
              </button>
            </form>
          </div>
      </div>
    </main>

    <Footer />
    </>
  );
}