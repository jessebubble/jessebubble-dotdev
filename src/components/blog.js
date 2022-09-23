import Nav from './navbar';
import Footer from './footer';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Blog() {
  return (
    <>
    <Nav />

    <main className="bg-slate-900 p-10">
      <div className='border-2 rounded shadow-emerald-300'>
        <div className=''> 
          <Player
          src='https://assets10.lottiefiles.com/packages/lf20_h5lattxs.json'
          className=''
          background='transparent'
          loop={true}
          autoplay={true} >
          </Player>
        </div>
      </div>
    </main>

    <Footer />
    </>
  );
}