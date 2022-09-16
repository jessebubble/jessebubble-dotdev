import { Link } from 'react-router-dom';
import Nav from './components/navbar';
import Hero from './components/hero';
import Footer from './components/footer';

export default function App() {
  return (
    <>
    < Nav />
    < Hero />

    <main className="bg-slate-50 p-8 md:p-10 lg:p-16">
      <div className="text-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl tracking-tight text-gray-900 font-medium antialiased">
          dev<span className='text-cyan-600'>Portfolio</span>
        </h1>
        <p className='text-lg'>design with a purpose</p>
      </div>
    </main>
    <main className='bg-slate-50 pb-8 md:pb-16 border-b-2 border-gray-900'>
      <div className='flex flex-col lg:flex-row items-center justify-evenly w-full gap-2'>
        <div className='bg-slate-900 rounded-xl'>
          <div className=''> 
            <img 
              src='./vwd2.png'
              alt='logo'
              className='w-44 md:w-48'
            />
          </div>
          <div className='p-4 -mt-8 lg:mt-0'>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight antialiased text-white">
              Web Design and Marketing Agency <span className="block text-cyan-600 text-lg md:text-xl">located in San Antonio, TX</span>
            </h1>
            <p className="tracking-tight antialiased mt-3 md:mt-5 text-white max-w-xl text-lg md:text-xl">
              Built using React, TailwindCSS, LottieFiles and Figma. Domain purchsed through google and the site is hosted on Vercel
            </p>
            <div className="mt-5 flex items-center justify-start gap-4">
              <div className='tracking-tight antialiased p-2 items-center text-center border-2 bg-cyan-400 text-xl md:text-2xl font-light
                                 hover:bg-cyan-200 border-white'>
                <Link to="https://www.vivawebdesign.dev" className='text-gray-900'>
                  View Site 
                </Link>
              </div>
              <div className='tracking-tight antialiased p-2 items-center text-center border-2 bg-cyan-400 text-xl md:text-2xl font-light
                                 hover:bg-cyan-200 border-white'>
                <Link to="https://github.com/jessebubble/viva-portfolio" className='text-gray-900'>
                  View Code 
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-slate-900 rounded-xl'>
          <div className=''> 
            <img 
              src='./vp2.png'
              alt='logo'
              className='w-44 md:w-48'
            />
          </div>
          <div className='p-4 -mt-8 lg:mt-0'>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight antialiased text-white">
              Community Driven Portrait Studio  <span className="block text-cyan-600 text-lg md:text-xl">located in San Antonio, TX</span>
            </h1>
            <p className="tracking-tight antialiased mt-3 md:mt-5 text-white max-w-xl text-lg md:text-xl">
              Built using React, TailwindCSS, Figma and license free images from Unsplash. Domain purchsed through google and hosted on Vercel
            </p>
            <div className="mt-5 flex items-center justify-start gap-4">
              <div className='tracking-tight antialiased p-2 items-center text-center border-2 border-white bg-orange-600 text-xl md:text-2xl font-light hover:bg-orange-200'>
                <Link to="https://www.vivaportraits.com" className='text-gray-900'>
                  View Site 
                </Link>
              </div>
              <div className='tracking-tight antialiased p-2 items-center text-center border-2 border-white bg-orange-600 text-xl md:text-2xl font-light hover:bg-orange-200'>
                <Link to="https://github.com/jessebubble/viva-portraits" className='text-gray-900'>
                  View Code 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <main className='bg-slate-50 bg-heroPattern p-6 md:p-10 lg:p-16'>
      <div className='flex flex-col items-center justify-center'>
        <div className="md:text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 antialiased">
            Let's <span className='text-sky-400'>Connect</span>
          </h2>
          <p className="mt-1 max-w-2xl md:text-2xl">
            Independent doesn't mean alone
          </p>
        </div>
        <div className='mt-10 w-full'>
          <div className='flex flex-col-reverse items-center gap-4 md:gap-8'>
            <form 
              className='flex flex-col gap-4 bg-sky-50 border-2 border-sky-400 rounded-xl p-4 md:p-8 lg:p-16' 
              action='#' 
              method='POST' >
              <div> 
                <input 
                  name='firstname' 
                  id='firstname' 
                  placeholder='First and Last Name'
                  className='bg-transparent placeholder-slate-400 text-white border-b-2 border-sky-400 text-lg p-2.5' 
                  required   
                />
              </div>
              <div>
                <input 
                  type='email' 
                  name='email' 
                  id='email' 
                  placeholder='Your Email'
                  className='bg-transparent placeholder-slate-400 text-white border-b-2 border-sky-400 text-lg p-2.5' 
                  required />
              </div>
              <div>
                <input 
                  name='message' 
                  id='message' 
                  placeholder='Your Message'
                  className='bg-transparent placeholder-slate-400 text-white border-b-2 border-sky-400 text-lg p-2.5' 
                  required />
              </div>
              <button  
                className='tracking-tight antialiased p-2 border-2 border-sky-400 bg-transparent text-xl md:text-2xl font-light text-sky-400  hover:bg-sky-100'>
                Submit
              </button>
            </form>
            <div className='flex items-center justify-center'> 
              <img 
                src="./bubble6.png" 
                alt="portrait"
                className="lg:skew-y-3 bg-sky-400 rounded-3xl md:w-96"             
              /> 
            </div>
          </div>
        </div>
      </div> 
    </main>

    <Footer />
    </>
  );
}