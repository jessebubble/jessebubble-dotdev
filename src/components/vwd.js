import Nav from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Viva() {
  return (
    <>
    <Nav />

    <main className="bg-slate-900 border-b-2 w-full">
      <div className="flex flex-col lg:flex-row items-center justify-evenly p-8 md:p-10 lg:p-16">
        <div className="">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-white">
            VIVA Web <span className="block text-rose-400">Design</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-white max-w-xl text-lg md:text-xl">
            We're local independent creatives using modern web technologies to bring your ideas to life. Built into every design is a passion for creating beautiful, functional, and accessible websites.
            <span className='text-rose-400'> VIVA+ </span> our exclusive suite of tools to help you grow your business is included in every design.
          </p>
          <div className="mt-5 flex items-center justify-start">
            <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-white bg-transparent text-xl md:text-2xl font-light hover:bg-white hover:border-cyan-400'>
              <Link to="https://www.vivawebdesign.dev/" className='text-white hover:text-gray-900 pr-2 pl-2'>
                Learn More 
              </Link>
            </div>
          </div>
        </div>
        <div className=''> 
          <Player
          src='https://assets5.lottiefiles.com/packages/lf20_xudbbfnj.json'
          className='md:w-60 lg:w-80'
          background='transparent'
          loop={true}
          autoplay={true} >
          </Player>
        </div>
      </div> 
    </main>

    <Footer />
    </>
  );
}