import SideBar from "../sidebar/SideBar"
import { Player } from '@lottiefiles/react-lottie-player';
  
  export default function MissingHero() {
      
    return (
        <div className="bg-slate-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-36">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-y-16 gap-x-8 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-4">
                        <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                            <SideBar />
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl">
                        <Player
                            src="https://assets5.lottiefiles.com/packages/lf20_kjixtysj.json"
                            className='md:w-60 lg:w-96'
                            background='transparent'
                            loop={true}
                            autoplay={true} >
                        </Player>
                    </div>
                </div>
            </div>
        </div>
    )
}