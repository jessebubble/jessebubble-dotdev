import SideBar from "../sidebar/SideBar"
  
  export default function Hero() {
      
    return (
        <div className="bg-slate-900">
            <div className="mx-auto max-w-7xl">
                <div className="relative isolate overflow-hidden bg-slate-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
                    <SideBar />
                </div>
            </div>
        </div>
    )
}