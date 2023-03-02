import { portfolioArray } from "./heroArray"
import SideBar from "../sidebar/SideBar"
  
  export default function PortfolioHero() {
      
    return (
        <div className="bg-slate-900 py-24 md:py-6 flex items-center justify-center ">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 md:px-20 md:grid-cols-3">
                <div className="mx-auto max-w-2xl md:mx-0 flex flex-col items-center justify-center">
                    <SideBar />
                </div>
                <div className="md:col-span-2">
                    <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 md:mx-0 md:max-w-none md:gap-x-8 md:col-span-2" >
                        {portfolioArray.map((client) => (
                            <li key={client.name}>
                                <a href={client.webUrl} >
                                    <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={client.imageUrl} alt="client logo" />
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
    )
}