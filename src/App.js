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

    <main className="bg-slate-900">
      <div className="flex items-center justify-center pt-4 pb-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl tracking-tight text-white font-light">
          More Than Just A <span className='text-rose-500'>Portfolio</span>
        </h1>
      </div>
    </main>

    <main className='bg-gradient-to-b from-slate-900 via-teal-300 to-slate-900 w-full pt-4 pb-4 md:pb-8'>
      <div className='flex flex-col lg:grid lg:grid-cols-2'>
        <div className='flex flex-col items-center justify-center rounded-lg bg-transparent'>
          <div className='md:w-8/12 lg:w-9/12'> 
              <Player
              src='https://assets2.lottiefiles.com/packages/lf20_2t5zvcho.json'
              className=''
              background='transparent'
              loop={true}
              autoplay={true} >
              </Player>
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold subpixel-antialiased tracking-tight text-gray-900'>
              <span className='text-rose-500'>VIVA </span>Web Design
            </h2>
            <p className='text-center text-xl md:text-2xl lg:text-3xl tracking-tight subpixel-antialiased text-gray-900 font-light'>
              Built with React, TailwindCSS and LottieFiles
              <span className='block'>Marketing and Design company promoting Motion</span>
              <a href='https://www.vivawebdesign.dev'><span className='block text-rose-500 text-center pb-2'>https://www.vivawebdesign.dev</span></a>
            </p>
            <div className='tracking-tight subpixel-antialiased pb-3 p-2 items-center text-center shadow-md lg:shadow-lg shadow-indigo-300 border-2 border-white px-5 md:px-7 bg-slate-900 text-2xl md:text-4xl font-light lg:p-3
                transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-white hover:border-black'>
              <Link to="https://github.com/jessebubble/viva-portfolio" className='text-white hover:text-gray-900'>
                View Code on Github
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center bg-transparent'>
          <div className='md:w-8/12 lg:w-7/12'> 
            <img 
              src='../caroline-unsplash.png' 
              alt='portrait' 
              className='hover:rotate-6' 
            />
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold subpixel-antialiased tracking-tight text-gray-900 -mt-14 md:-mt-16 lg:-mt-20'>
              <span className='text-fuchsia-500'>VIVA </span>Portraits
            </h2>
            <p className='text-center text-xl md:text-2xl lg:text-3xl tracking-tight subpixel-antialiased text-gray-900 font-light'>
              Built with React, TailwindCSS and images from Unsplash
              <span className='block'>New portrait studio located in San Antonio, Texas</span>
              <a href='https://www.vivaportraits.com'><span className='block text-fuchsia-500 text-center pb-2'>https://www.vivaportraits.com</span></a>
            </p>
            <div className='tracking-tight subpixel-antialiased pb-3 p-2 items-center text-center shadow-md lg:shadow-lg shadow-indigo-300 border-2 border-white px-5 md:px-7 bg-slate-900 text-2xl md:text-4xl font-light lg:p-3
                transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-white hover:border-black'>
              <Link to="https://github.com/jessebubble/viva-portraits" className='text-white hover:text-gray-900'>
                View Code on Github
              </Link>
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
                className='tracking-tight subpixel-antialiased pb-3 p-2 items-center text-center shadow-md lg:shadow-lg shadow-indigo-300 border-2 border-white px-5 md:px-7 bg-slate-900 text-2xl md:text-4xl font-light lg:p-3
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