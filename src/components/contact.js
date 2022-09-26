import Nav from './navbar';
import Footer from './footer';
import Form from './form';


export default function Contact() {
  return (
    <>
    <Nav />

    <main className="relative bg-slate-900 py-16 sm:py-24">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-slate-100 lg:right-72"></div>
            <svg className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
              <defs>
                <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
            {/* <!-- Testimonial card--> */}
            <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
              <img 
                className="absolute inset-0 h-full w-full object-cover" 
                src="./bubble6.png" 
                alt=""
              />
              <div className="absolute inset-0 bg-yellow-400 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-800 via-indigo-800 opacity-75"></div>
              <div className="relative px-8">
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <svg className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                      Creating a platform to collaborate with the community and give my client's an opportunity to see their idea grow has been the most rewarding thing about switching careers.
                    </p>
                  </div>
                  <footer className="mt-4">
                    <p className="text-base font-semibold text-indigo-200">Jesse Hernandez | Web Developer</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* <!-- Content area --> */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Independent doesn't mean alone</h2>
            <div className="mt-6 space-y-6 text-gray-500">
              <p className="text-lg">
                Life before the pandemic was busy, but I was able to find time to work on my own projects. I was able to create a few websites and apps for friends and family, but I was always looking for a way to grow my skills and collaborate with others.
              </p>
              <p className="text-base leading-7">
                During the pandemic I was able to take a step back to really focus on my web development skills. I said goodbye to my full-time job as an insurance professional and dived into the world of web development through a developer bootcamp and the self taught options online.
              </p>
              <p className="text-base leading-7">
                Fast forward to today, I am a full stack web developer with a passion for creating websites and apps that are easy to use and look great. I am always looking for new opportunities to collaborate with others and grow my skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Form />

    <main className="overflow-hidden bg-slate-50">
      <div className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <svg className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
          <defs>
            <pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-slate-300" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">More Than Just A <span className='text-sky-500'>Freelancer</span></h2>
            <p className="mt-1 text-md text-slate-500">
              I bring the following to every project
            </p>
          </div>
          <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
            <div>
              <dt>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-sky-500 text-white">
                  {/* <!-- Heroicon name: outline/globe-alt --> */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                  </svg>
                </div>
                <p className="mt-5 text-lg font-medium leading-6 text-gray-900">Communication</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Strong interpersonal and communication skills are essential to any project. I will keep you updated on the progress of your project and will be available to answer any questions you may have. 
              </dd>
            </div>
            <div>
              <dt>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-sky-500 text-white">
                  {/* <!-- Heroicon name: outline/scale --> */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                <p className="mt-5 text-lg font-medium leading-6 text-gray-900">Transparency</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                The future is transparency! Dedication to transparency is a core value of mine. I will always be upfront and honest with you about the progress of your project and will never over-promise or under-deliver.
              </dd>
            </div>
            <div>
              <dt>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-sky-500 text-white">
                  {/* <!-- Heroicon name: outline/bolt --> */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                  </svg>
                </div>
                <p className="mt-5 text-lg font-medium leading-6 text-gray-900">Collaboration</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                100% of my work is dedicated to teamwork and flexible collaboration. My goal is to bring your idea to life by understanding your needs and providing you with a solution that meets your requirements.
              </dd>
            </div>
            <div>
              <dt>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-sky-500 text-white">
                  {/* <!-- Heroicon name: outline/envelope --> */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <p className="mt-5 text-lg font-medium leading-6 text-gray-900">Results Driven</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                I'm a results-driven developer with a passion for creating beautiful functional websites and am committed to providing you with a solution that will help you achieve your goals and grow your business.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </main>

    <Footer />
    </>
  );
}