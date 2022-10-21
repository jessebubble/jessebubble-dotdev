import { FiGithub } from "react-icons/fi"


export default function Card() {
    return (

        <main className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3"></div>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">developer<span className='text-fuchsia-500'>Portfolio</span></h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              I've been fortunate enough to have support from the community. Here are some projects i've built for clients in San Antonio using modern web design, development, animation, and marketing tools.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-black">
              <div className="flex-shrink-0">
                <a href="https://www.vivawebdesign.dev">
                  <img 
                    className="h-48 w-full object-cover hover:opacity-80 transition ease-in-out duration-150" 
                    src="./vivawebdesign.png" 
                    alt="viva logo"
                  />
                </a>
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="/post/viva-web-design" className="hover:underline">devBlog</a>
                  </p>
                  <div className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900"><span className='text-fuchsia-500'>VIVA</span> Web Design</p>
                    <p className="mt-3 text-base text-gray-500">
                      Viva Web Design is a local San Antonio design and animation company specializing in utilizing modern web designs to help small businesses and the local community grow.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="https://github.com/jessebubble/viva-homepage">
                      <span className="sr-only">Github</span>
                      <FiGithub className='text-gray-900 hover:text-gray-500 w-6 h-6' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-black">
              <div className="flex-shrink-0">
                <a href="https://www.vivaportraits.com/">
                  <img 
                    className="h-48 w-full object-cover hover:opacity-80 transition ease-in-out duration-150" 
                    src="./vivaportraits.png" 
                    alt=""
                  />
                </a>
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="/post/viva-portraits" className="hover:underline">devBlog</a>
                  </p>
                  <div className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900"><span className="text-orange-500">VIVA</span> Portraits</p>
                    <p className="mt-3 text-base text-gray-500">
                      Viva Portraits is a local San Antonio team of creatives specializing in accessable, affordable portraits for the community. Learn more about their monthly themed portrait sessions.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="https://github.com/jessebubble/viva-portraits">
                      <span className="sr-only">Github</span>
                      <FiGithub className='text-gray-900 hover:text-gray-500 w-6 h-6' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-black">
              <div className="flex-shrink-0">
                <a href='https://www.vivawreaths.com/'>
                  <img 
                    className="h-48 w-full object-cover hover:opacity-80 transition ease-in-out duration-150" 
                    src="./vivawreaths.png" 
                    alt="logo"
                  />
                </a>
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="/blog" className="hover:underline">devBlog</a>
                  </p>
                  <div className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900"><span className='text-emerald-500'>VIVA</span> Wreaths</p>
                    <p className="mt-3 text-base text-gray-500">
                      Viva Wreaths is a local San Antonio business that specializes in custom wreaths. No matter the occasion, Viva Wreaths can create the perfect wreath for your home and business
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="https://github.com/jessebubble/viva-wreaths">
                      <span className="sr-only">Github</span>
                      <FiGithub className='text-gray-900 hover:text-gray-500 w-6 h-6' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img 
                  className="h-48 w-full object-cover hover:opacity-80 transition ease-in-out duration-150" 
                  src="./bl.png" 
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="/blog" className="hover:underline">devBlog</a>
                  </p>
                  <div className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">Buruato Landscaping</p>
                    <p className="mt-3 text-base text-gray-500">
                      Mr. B is a local San Antonio landscaper who specializes in lawn care, tree trimming, and more. He's been in the business for over 10 years and has a passion for helping his community.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="/">
                      <span className="sr-only">Github</span>
                      <FiGithub className='text-gray-900 hover:text-gray-500 w-6 h-6' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img 
                  className="h-48 w-full object-cover hover:opacity-80 transition ease-in-out duration-150" 
                  src="pr2.png" 
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="/blog" className="hover:underline">devBlog</a>
                  </p>
                  <div className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">Ponce Remodeling</p>
                    <p className="mt-3 text-base text-gray-500">
                      Ponce Remodeling specializes in interior and exterior remodeling. Commercial and Residential services are available to the San Antonio community.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="/">
                      <span className="sr-only">Github</span>
                      <FiGithub className='text-gray-900 hover:text-gray-500 w-6 h-6' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img 
                  className="h-48 w-full object-cover hover:opacity-80 transition ease-in-out duration-150" 
                  src="./alamo.png" 
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="/blog" className="hover:underline">devBlog</a>
                  </p>
                  <div className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">Alamo Welding</p>
                    <p className="mt-3 text-base text-gray-500">
                      From custom fabrication to welding repairs, Alamo Welding has you covered. They specialize in custom fabrication and welding repairs for the San Antonio community.    
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="/">
                      <span className="sr-only">Github</span>
                      <FiGithub className='text-gray-900 hover:text-gray-500 w-6 h-6' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    )
}