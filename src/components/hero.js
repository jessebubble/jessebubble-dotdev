import { FiInstagram, FiFacebook, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { IconContext } from 'react-icons';
import { SiTailwindcss, SiReact, SiNextdotjs, SiFigma, SiWordpress, SiShopify, SiGraphql, SiVercel, SiContentful, SiGoogledomains, SiGoogleanalytics, SiMarketo } from "react-icons/si";

export default function Hero() {
  return (
    <>
    <div className="bg-slate-900 flex flex-col xl:flex-row border-b-2">
      <div className="mx-auto w-full flex items-center justify-center lg:justify-end">
        <div className="pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mx-auto mt-10 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight antialiased text-white sm:text-5xl md:text-6xl">
                <span className="xl:inline">More Than Just A </span>
                <span className="block text-fuchsia-600">Developer</span>
              </h1>
              <p className="tracking-tight antialiased mt-3 text-white sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                San Antonio native with strong interpersonal and communication skills, dedicated to teamwork and collaboration. 
                From the world of selling insurance to holding a Full Stack Web Development certificate from the University of Texas at San Antonio where I developed skills using modern web technologies.  
              </p>
            <div className="mt-5 sm:mt-8 flex items-center justify-center lg:justify-start">
              <ul className='flex space-x-6 lg:space-x-10 xl:space-x-13 md:space-x-8 '>
                <IconContext.Provider value={{ className: 'text-white hover:text-rose-400 h-7 w-7' }}>
                  <a href='https://github.com/jessebubble' className=''>
                    <FiGithub />
                  </a>
                  <a href='https://www.linkedin.com/in/jessebubble' className=''>
                    <FiLinkedin />
                  </a>
                  <a href='https://www.instagram.com/jessebubble' className=''>
                    <FiInstagram />
                  </a>
                  <a href='https://www.facebook.com/jessebubble' className=''>
                    <FiFacebook />
                  </a>
                  <a href='https://twitter.com/jessebubble' className=''>
                    <FiTwitter />
                  </a>
                </IconContext.Provider>
              </ul>
            </div>
            </div>
          </main>
        </div>
      </div>
      <div className="bg-gray-900 w-full flex items-center justify-start">
        <img 
          className="object-cover w-full lg:w-8/12 lg:skew-y-3 bg-fuchsia-600"
          src="./bubble6.png" 
          alt=""
        />
      </div>
    </div>

    <main className="bg-slate-900 w-full border-b-2 pb-4">
      <div className='flex items-center justify-center text-3xl md:text-4xl lg:text-6xl pt-4'>
        <h4 className='pb-2 text-white tracking-tight font-light'>
          Your Idea Brought to <span className='text-sky-600'>Life</span>  
        </h4>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-evenly gap-y-10 gap-x-6 xl:gap-x-8 px-4 xl:px-8 py-4 xl:py-8'>
        <div className='flex flex-col items-center justify-evenly rounded-lg border-2 bg-slate-400 p-6 md:p-7 xl:p-10'>
            <h4 className='pb-2 text-white tracking-tight font-medium text-2xl md:text-3xl lg:text-4xl'>
              Front End Design Built w/ <span className="block text-center text-sky-600 lg:text-3xl">Modern Web Technologies</span>

            </h4>
            <div className='flex items-center justify-evenly pt-4 space-x-8'>
              <IconContext.Provider value={{ className: 'h-16 w-16' }}>
                <SiFigma className="block" />
                <SiReact />
                <SiNextdotjs />
                <SiTailwindcss />
              </IconContext.Provider>
            </div>
        </div>
        <div className='flex flex-col items-center justify-evenly rounded-lg border-2  bg-slate-400 p-6 md:p-7 xl:p-10'>
            <h4 className='pb-2 text-white tracking-tight font-medium text-2xl md:text-3xl lg:text-4xl'>
              Back End Design Built w/ <span className="block text-center text-sky-600 lg:text-3xl">Headless CMS Tools</span>
            </h4>
            <div className='flex items-center justify-evenly pt-4 space-x-8'>
              <IconContext.Provider value={{ className: 'h-16 w-16' }}>
                <SiGraphql />
                <SiContentful />
                <SiShopify />
                <SiWordpress />
              </IconContext.Provider>
            </div>
        </div>
        <div className='flex flex-col items-center justify-evenly rounded-lg border-2  bg-slate-400 p-6 md:p-7 xl:p-10'>
            <h4 className='pb-2 text-white tracking-tight font-medium text-2xl md:text-3xl lg:text-4xl'>
              SEO + Web Performance <span className="block text-center text-sky-600 lg:text-3xl">Responsive Web Design</span>
            </h4>
            <div className='flex items-center justify-evenly pt-4 space-x-8'>
              <IconContext.Provider value={{ className: 'h-16 w-16' }}>
                <SiGoogledomains />
                <SiVercel />
                <SiMarketo />
                <SiGoogleanalytics />
              </IconContext.Provider>
            </div>
        </div>
      </div>
    </main>
   </>
  );
}