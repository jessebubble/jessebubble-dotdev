import { FiInstagram, FiFacebook, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <>
        <main className="bg-slate-900">
         <div className='flex flex-col items-center pt-4 pb-4'>
            <h2 className='text-center text-3xl md:text-4xl lg:text-5xl font-light tracking-tight subpixel-antialiased pb-6'>
             <span className="text-teal-400 ">Independent doesn't mean alone</span>
            </h2>
            <div className='tracking-tight subpixel-antialiased pb-3 p-2 items-center text-center shadow-md lg:shadow-lg shadow-indigo-300 border-2 border-white px-5 md:px-7 bg-slate-900 text-2xl md:text-4xl font-light lg:p-3
                transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-white hover:border-black'>
              <Link to="/contact" className='text-rose-500 hover:text-gray-900'>
              Let's Connect
              </Link>
            </div>
          </div>
        </main>

        <footer className='bg-slate-900'>
          <div className='flex justify-evenly items-center w-full pb-4'>
            <div className='flex flex-row space-x-4 md:space-x-5 lg:space-x-6 pt-4'>
              <IconContext.Provider 
                  value={{ className: 'text-white hover:text-rose-400 h-7 w-7' }}>
                  <a href='https://github.com/jessebubble' className=''>
                    <FiGithub />
                  </a>
                  <a href='https://twitter.com/jessebubble' className=''>
                    <FiLinkedin />
                  </a>
                  <a href='https://www.instagram.com/jessebubble' className=''>
                    <FiInstagram />
                  </a>
                  <a href='https://www.facebook.com/jessebubble' className=''>
                    <FiFacebook />
                  </a>
                  <a href='https://www.linkedin.com/in/jessebubble' className=''>
                    <FiTwitter />
                  </a>
              </IconContext.Provider>
            </div>
          </div>  
        </footer>
        </>
    );
}