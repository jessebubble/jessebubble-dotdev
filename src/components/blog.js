import Nav from './navbar';
import Footer from './footer';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Blog() {
  return (
    <>
    <Nav />

    <main className="bg-slate-100 pt-12 pb-16 lg:pt-16 lg:pb-20 p-6 md:p-10 lg:p-16">
      <div className='flex justify-center'>
        <div className=''> 
          <Player
          src='https://assets4.lottiefiles.com/packages/lf20_ljb5ijxw.json'
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