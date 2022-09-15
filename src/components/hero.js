import { IconContext } from 'react-icons';
import { SiTailwindcss, SiReact, SiNextdotjs, SiFigma, SiWordpress, SiShopify, SiGraphql, SiVercel, SiGoogledomains, SiGoogleanalytics, SiMarketo, SiCraftcms } from "react-icons/si";
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <>
     <main className="bg-slate-900 border-b-2">
      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full p-8 md:p-10 lg:p-16">
        <div className="">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-white">
            More Than Just A <span className="block text-fuchsia-600">Developer</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-white max-w-xl text-lg md:text-xl">
            San Antonio native with strong interpersonal and communication skills, dedicated to teamwork and collaboration. 
            From the world of selling insurance to holding a Full Stack Web Development certificate from the University of Texas at San Antonio where I developed skills using modern web technologies.  
          </p>
          <div className="mt-5 flex items-center justify-start">
            <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-white bg-transparent text-xl md:text-2xl font-light
                              transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-white hover:border-black'>
              <Link to="/portfolio" className='text-white hover:text-gray-900'>
                Learn More 
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-5/12 pt-5 lg:pt-0">
          <img 
            className="lg:skew-y-3 bg-fuchsia-600 rounded-3xl "
            src="./bubble6.png" 
            alt="portrait"
          />
        </div>
      </div> 
    </main>

    <main className="bg-slate-900 pt-4 pb-4">
      <div className='flex flex-col items-center justify-center text-xl md:text-2xl lg:text-3xl'>
        <div className="p-4 text-center">
          <h1 className='pb-2 text-white tracking-tight font-medium antialiased'>
            <span className='block'>The Tech Stack:</span>
            Your Ideas Brought to <span className='text-rose-600'>LIFE</span>  
            <span className='block text-lg text-indigo-600'>with these design and development tools</span>
          </h1>
        </div>
        <div className='bg-slate-50 flex flex-col lg:flex-row items-center justify-evenly gap-4'>
          <div className='p-6 md:p-7 lg:p-10 text-center border border-gray-900 lg:border-0'>
              <h4 className='pb-2 text-gray-900 tracking-tight font-medium text-xl md:text-2xl antialiased'>
                Front End Design Built w/ <span className="block text-center text-indigo-600 text-xl">Modern Web Technologies</span>
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
          <div className='p-6 md:p-7 lg:p-10 text-center border border-gray-900 lg:border-0'>
              <h4 className='pb-2 text-gray-900 tracking-tight font-medium text-xl md:text-2xl'>
                Back End Design Built w/ <span className="block text-center text-indigo-600 text-xl">Headless CMS Tools</span>
              </h4>
              <div className='flex items-center justify-evenly pt-4 space-x-8'>
                <IconContext.Provider value={{ className: 'h-16 w-16' }}>
                  <SiGraphql />
                  <SiShopify />
                  <SiWordpress />
                  <SiCraftcms />
                </IconContext.Provider>
              </div>
          </div>
          <div className='p-6 md:p-7 lg:p-10 text-center border border-gray-900 lg:border-0'>
              <h4 className='pb-2 text-gray-900 tracking-tight font-medium text-xl md:text-2xl'>
                SEO + Web Performance <span className="block text-center text-indigo-600 text-xl">Responsive Web Design</span>
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
      </div>
    </main>
   </>
  );
}