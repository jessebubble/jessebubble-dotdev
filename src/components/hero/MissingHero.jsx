import Pattern from '../Pattern';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
  
  export default function MissingHero() {
      
    return (
        <div className="bg-slate-900">
            <div className="mx-auto max-w-7xl">
                <div className="relative isolate overflow-hidden bg-slate-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
                    <div className="bg-white rounded-2xl">
                        <Player
                            src="https://assets5.lottiefiles.com/packages/lf20_kjixtysj.json"
                            className='md:w-60 lg:w-96'
                            background='transparent'
                            loop={true}
                            autoplay={true} >
                        </Player>
                    </div>
                    <Link to="/">
                        <div className="relative z-10 max-w-3xl mx-auto text-center p-8 mt-8">
                            <button className="bg-logo-pink text-white hover:bg-indigo-500 font-bold py-2 px-4 rounded-2xl">
                                Return to jessebubble.dev
                            </button>
                        </div>
                    </Link>
                    <Pattern />
                </div>
            </div>
        </div>
    )
}