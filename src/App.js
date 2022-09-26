import Nav from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import Form from './components/form';
import Footer from './components/footer';
import { SiTailwindcss, SiReact, SiFigma, SiWordpress, SiShopify, SiGraphql, SiVercel, SiGoogledomains, SiGoogleanalytics } from "react-icons/si";

export default function App() {
  return (
    <>
    < Nav />
    < Hero />

    <main className="relative bg-slate-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-semibold text-indigo-600">Modern Web Technologies</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your idea brought to life</p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          The design, developer and marketing tools currently used by jessebubble.dev
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root rounded-lg bg-slate-100 px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                      <SiFigma className='h-6 w-6 text-white'/>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">Figma</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Figma connects everyone in the design process so teams can deliver better products, faster.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root rounded-lg bg-slate-100 px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                      <SiReact className='h-6 w-6 text-white'/>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">React</h3>
                  <p className="mt-5 text-base text-gray-500">
                    React makes it painless to create interactive UIs. Design simple views for each state in your application.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root rounded-lg bg-slate-100 px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                      <SiTailwindcss className='h-6 w-6 text-white'/>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">TailwindCSS</h3>
                  <p className="mt-5 text-base text-gray-500">
                    A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root rounded-lg bg-slate-100 px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                      <SiGraphql className='h-6 w-6 text-white'/>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">GraphQL</h3>
                  <p className="mt-5 text-base text-gray-500">
                    GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root rounded-lg bg-slate-100 px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                      <SiShopify className='h-6 w-6 text-white'/>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">Shopify</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Shopify is a commerce platform that allows anyone to easily sell online, at a retail location, and everywhere in between.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root rounded-lg bg-slate-100 px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                      <SiWordpress className='h-6 w-6 text-white'/>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">Headless CMS</h3>
                  <p className="mt-5 text-base text-gray-500">
                    A headless CMS provides a content repository and a set of APIs for developers to build their own custom frontend.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root rounded-lg bg-slate-100 px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                      <SiVercel className='h-6 w-6 text-white'/>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">Vercel</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Vercel is a cloud platform for static sites and Serverless Functions that you can deploy instantly.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root rounded-lg bg-slate-100 px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                      <SiGoogledomains className='h-6 w-6 text-white'/>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">Google Domains</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Google domain names are easy to use and come with a range of features to help you grow your website.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="flow-root rounded-lg bg-slate-100 px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                      <SiGoogleanalytics className='h-6 w-6 text-white'/>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">Google Analytics</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Google Analytics is a free web analytics service offered by Google that tracks and reports website traffic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Card />
    <Form />

    <Footer />
    </>
  );
}