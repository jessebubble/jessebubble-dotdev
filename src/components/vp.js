import Nav from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';

export default function Portraits() {
  return (
    <>
    <Nav />

    <main className="bg-slate-900">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full p-8 md:p-10 lg:p-16">
        <div className="">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-white">
            More Than Just A <span className="block text-fuchsia-500">Picture</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-white max-w-xl text-lg md:text-xl">
            We're a team of local creatives who are passionate about capturing your moments and bringing them to life 
          </p>
          <div className="mt-5 sm:mt-8 flex items-center justify-start">
            <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-white bg-transparent text-xl md:text-2xl font-light
                              transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-white hover:border-black'>
              <Link to="https://www.vivaportraits.com/" className='text-white hover:text-gray-900'>
                Learn More 
              </Link>
            </div>
          </div>
        </div>
        <div className=''>
          <img 
            src='./caroline-unsplash.png'
            alt='VIVA Studio Days'
            className='w-64 md:w-96 lg:w-128 opacity-80'
          />
        </div>
      </div>
    </main>

    <Footer />
    </>
  );
}