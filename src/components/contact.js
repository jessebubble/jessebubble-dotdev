import { Player } from '@lottiefiles/react-lottie-player';
import Nav from './navbar';
import Footer from './footer';

export default function Contact() {
  return (
    <>
    <Nav />

    <main className="bg-slate-900">
      <div className="flex items-center justify-center pt-4 lg:pt-16 pb-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl tracking-tight text-white font-light">
          More Than Just A <span className='text-sky-500'>Contact</span>
        </h1>
      </div>
    </main>
    <main className='bg-gradient-to-b from-slate-900 via-lime-500 to-slate-900 border-b-2 pt-4 pb-4'>
      <div className='flex flex-col w-full items-center justify-center'>
          <div className='lg:w-6/12'> 
              <Player
              src='https://assets7.lottiefiles.com/private_files/lf30_qxakfuim.json'
              className=''
              background='transparent'
              loop={true}
              autoplay={true} >
              </Player>
          </div>
          <div className='pt-4 md:pt-5 lg:pt-16'>
            <h2 className='text-center text-3xl xl:text-5xl font-bold subpixel-antialiased tracking-tight text-white'>
              The Future is <span className='text-sky-500'>Transparency</span>
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