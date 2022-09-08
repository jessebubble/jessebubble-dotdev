import { Player } from '@lottiefiles/react-lottie-player';
import Nav from './navbar';
import Footer from './footer';

export default function Portfolio() {
  return (
    <>
    <Nav />

    <main className="bg-slate-900">
      <div className='pt-4 pb-4 md:pb-8'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl text-center text-white tracking-tight subpixel-antialiased font-light'>
          Web Design + <span className='text-amber-500'> Development</span> 
        </h2>
      </div>
    </main>
    <main className='bg-gradient-to-t from-rose-500 via-rose-300 to-slate-900'>
      <div className='flex flex-col xl:flex-row w-full items-center justify-center pt-4 pb-4'>
          <div className='md:w-9/12 lg:w-3/12'> 
              <Player
              src='https://assets7.lottiefiles.com/packages/lf20_4tcribvp.json'
              className=''
              background='transparent'
              loop={true}
              autoplay={true} >
              </Player>
          </div>
          <div className=''>
            <h2 className='text-center text-3xl md:text-4xl lg:text-5xl font-light subpixel-antialiased tracking-tight text-white'>
              <span className='text-amber-500'>VIVA </span>Web Design
            </h2>
            <p className='text-center text-xl md:text-2xl lg:text-3xl tracking-tight subpixel-antialiased text-gray-900 font-light pb-4'>
              Built with React, TailwindCSS and LottieFiles
              <span className='block'></span>
              Marketing and Design company promoting Motion
              <span className='block'></span>
            </p>
            <div className='p-2 md:p-3 lg:p-4 text-center text-gray-900 hover:text-white shadow-sm shadow-current text-lg md:text-2xl font-light tracking-tight subpixel-antialiased
                        transform hover:translate-y-4 transition duration-300 ease-in-out'>
              Marketing and Advertising Agency
            </div>
            <div className='p-2 md:p-3 lg:p-4 text-center text-gray-900 hover:text-white shadow-sm shadow-current text-lg md:text-2xl font-light tracking-tight subpixel-antialiased
                        transform hover:translate-y-4 transition duration-300 ease-in-out'>
              Located in San Antonio, Texas
            </div>
            <div className='p-2 md:p-3 lg:p-4 text-center text-gray-900 hover:text-white shadow-sm shadow-current text-lg md:text-2xl font-light tracking-tight subpixel-antialiased
                        transform hover:translate-y-4 transition duration-300 ease-in-out'>
              Motion with a purpose + Headless CMS
            </div>
            <div className='p-2 md:p-3 lg:p-4 text-center text-gray-900 hover:text-white shadow-sm shadow-current text-lg md:text-2xl font-light tracking-tight subpixel-antialiased
                        transform hover:translate-y-4 transition duration-300 ease-in-out'>
            <a href='https://www.vivawebdesign.dev'><span className='block text-white text-center pb-2'>https://www.vivawebdesign.dev</span></a>
          </div>
        </div>
      </div>
    </main>

    <main className='bg-gradient-to-t from-lime-200 via-lime-400 to-rose-500'>
      <div className='flex flex-col xl:flex-row w-full items-center justify-center pt-4 pb-4'>
        <div className='md:w-9/12 lg:w-3/12'> 
            <img 
              src='../bianca-berg-unsplash.png' 
              alt='portrait' 
              className='hover:rotate-6' 
            />
        </div>
        <div className=''>
          <h2 className='text-center text-3xl md:text-4xl lg:text-5xl font-light subpixel-antialiased tracking-tight text-white'>
            <span className='text-amber-500'>VIVA </span>Portraits
          </h2>
          <p className='text-center text-xl md:text-2xl lg:text-3xl tracking-tight subpixel-antialiased text-gray-900 font-light pb-4'>
            New portrait studio located in San Antonio, Texas
            <span className='block'></span>
            Built with React, TailwindCSS and Unsplash
            <span className='block'></span>
          </p>
          <div className='p-2 md:p-3 lg:p-4 text-center text-gray-900 hover:text-white shadow-sm shadow-current text-lg md:text-2xl font-light tracking-tight subpixel-antialiased
                        transform hover:translate-y-4 transition duration-300 ease-in-out'>
            More Than Just a Picture
          </div>
          <div className='p-2 md:p-3 lg:p-4 text-center text-gray-900 hover:text-white shadow-sm shadow-current text-lg md:text-2xl font-light tracking-tight subpixel-antialiased
                        transform hover:translate-y-4 transition duration-300 ease-in-out'>
            More Than Just a Memory
          </div>
          <div className='p-2 md:p-3 lg:p-4 text-center text-gray-900 hover:text-white shadow-sm shadow-current text-lg md:text-2xl font-light tracking-tight subpixel-antialiased
                        transform hover:translate-y-4 transition duration-300 ease-in-out'>
            More Than Just a Moment
          </div>
          <div className='p-2 md:p-3 lg:p-4 text-center text-gray-900 hover:text-white shadow-sm shadow-current text-lg md:text-2xl font-light tracking-tight subpixel-antialiased
                        transform hover:translate-y-4 transition duration-300 ease-in-out'>
              <a href='https://www.vivaportraits.com'><span className='block text-amber-500 text-center pb-2'>https://www.vivaportraits.com</span></a>
          </div>
        </div>
      </div>
    </main>

    <Footer />
    </>
  );
}