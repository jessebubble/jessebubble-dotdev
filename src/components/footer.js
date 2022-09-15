import { FiInstagram, FiFacebook, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <>
        <main className="bg-slate-900 p-4 md:p-5 lg:p-6">
         <div className='flex flex-col items-center justify-center gap-4'>
            <h2 className='text-center text-xl md:text-2xl lg:text-3xl font-light tracking-tight antialiased'>
             <span className="text-indigo-600">Independent Doesn't Mean Alone</span>
            </h2>
            <div className='tracking-tight antialiased p-2 border-2 border-white bg-transparent text-xl md:text-2xl font-light
                transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-white hover:border-indigo-600'>
              <Link to="/contact" className='text-white hover:text-gray-900'>
              Let's Connect
              </Link>
            </div>
          </div>
        </main>

        <footer className='bg-slate-900 pb-4'>
          <div className='flex flex-row justify-evenly items-center'>
            <div className='flex space-x-2 md:space-x-3 lg:space-x-4'>
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