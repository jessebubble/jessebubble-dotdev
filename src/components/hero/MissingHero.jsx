import SideBar from "../sidebar/SideBar"
  
  export default function MissingHero() {
      
    return (
        <div className="bg-slate-900 py-24 md:py-40 flex items-center justify-center ">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 md:px-8 md:grid-cols-3">
                <div className="mx-auto max-w-2xl md:mx-0 flex flex-col items-center justify-center">
                    <SideBar />
                </div>

            </div>
        </div>
    )
}