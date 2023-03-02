import { portfolioArray } from "./heroArray"
import SideBar from "../sidebar/SideBar"
  
  export default function PortfolioHero() {
      
    return (
        <div className="bg-slate-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-36">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-y-16 gap-x-8 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-4">
                        <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                            <SideBar />
                        </div>
                    </div>
                    <div>
                        <div className="md:col-span-2">
                            <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 md:mx-0 md:max-w-none md:gap-x-8 md:col-span-2" >
                                {portfolioArray.map((client) => (
                                    <li key={client.name}>
                                        <a href={client.webUrl} >
                                            <img className="aspect-[3/2] w-full hover:shadow hover:shadow-white/10 object-cover" src={client.imageUrl} alt="client logo" />
                                        </a>
                                        <h3 className="mt-6 text-lg font-semibold leading-8 text-white">{client.name}</h3>
                                        <p className="text-base leading-7 text-gray-500">{client.role}</p>
                                        <p className="mt-4 text-base leading-7 text-gray-300">{client.bio}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}