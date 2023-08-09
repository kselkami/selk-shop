import { Outlet } from 'react-router-dom';
import Banner from '../banner/Banner';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import MouseFollow from '../mouseFollow/MouseFollow';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen w-full'>
      <section>
        <Banner/>
      </section>
      <section className='sticky top-0 z-30 bg-[#f3f3f3]'>
        <Navbar/>
      </section>
        <div className='flex-1'>
          <Outlet/>
        </div>
      <section className='bg-black'>
        <Footer/>
      </section>
      {/* <MouseFollow/> */}
    </div>
  )
}

export default Layout;