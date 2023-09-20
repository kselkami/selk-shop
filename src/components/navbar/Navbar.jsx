import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const screenWidth = screen.width;

  useEffect(() => {
    if(screenWidth > 1024) {
        toggle ? setToggle(true) : setToggle(toggle);
      }
    },[screenWidth]);
  
  function toggleMenu() {
    setToggle(!toggle);
    console.log(toggle)
  }


  return (
    <div className="wrapper py-4 px-6 w-full max-w-[1200px] mx-auto">
      
      {/* side nav on toggle */}

      <div onClick={toggleMenu} className={`navbar-backdrop fixed inset-0 bg-gray-800 opacity-90 z-100 ${toggle ? 'hidden' : ''}`}></div>
      <div className={`navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50 transition-all duration-[800ms] ${toggle ? 'translate-x-[-30rem]' : 'translate-x-0'}`}>
              <nav className={`relative z-10 px-9 pt-8 bg-black h-full overflow-y-auto `}>
                <div className="flex flex-wrap justify-between h-full">
                  <div className="w-full">
                    <div className="flex items-center justify-between -m-2">
                      <div className="w-auto p-2">
                        <a className="inline-block" href="#">
                        <span className='font-vina text-4xl text-yellow-300'>Mot<span className='text-pink-500'>Yeast</span></span>

                        </a>
                      </div>
                      <button  onClick={toggleMenu} className="w-auto p-2">
                        <a className="navbar-burger text-white" href="#">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-2-1">
                            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center py-16 w-full">
                    <ul>
                      <li className="mb-12 font-medium text-white hover:text-gray-200 tracking-tight"><Link to={'/'} data-config-id="auto-txt-6-1">Homepage</Link></li>
                      <li className="mb-12 font-medium text-white hover:text-gray-200 tracking-tight"><Link to={'/about'} data-config-id="auto-txt-6-1">About</Link></li>
                      <li className="mb-12 font-medium text-white hover:text-gray-200 tracking-tight"><Link to={'/contacts'} data-config-id="auto-txt-6-1">Contact</Link></li>
                      <li className="mb-12 font-medium text-white hover:text-gray-200 tracking-tight"><a href="#" data-config-id="auto-txt-6-1">Products</a></li>
                      <li className="font-medium text-white hover:text-gray-200 tracking-tight"><a href="#" data-config-id="auto-txt-9-1">Cart/Checkout</a></li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-end w-full pb-8"><a className="inline-block px-5 py-3 text-white font-semibold text-center tracking-tight bg-gradient-to-r from-yellow-300 to-pink-500 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" href="#" data-config-id="auto-txt-10-1">Log In / Sign Up</a></div>
                </div>
              </nav>
            </div>

        {/* End of side nav on toggle */}

      
      {/* Main nav */}
      
      <div className='w-full flex justify-between items-center'>
        
        {/* Left section */}

        <button onClick={toggleMenu} className='lg:hidden flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <div className='hidden lg:flex flex-row gap-4 items-center'>
          <div className='flex items-center'>
            <img width={25} src="img/flag2.png" alt="flag" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <div className='flex items-center'>
            <span>USD</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <div>
            <Link className='hover:border-b-2 hover:border-pink-500' to='/products/1'>Men</Link>
          </div>
          <div>
            <Link className='hover:border-b-2 hover:border-pink-500' to='/products/2'>Women</Link>
          </div>
          <div>
            <Link className='hover:border-b-2 hover:border-pink-500' to='/products/3'>Kids</Link>
          </div>
          <div>
            <Link className='hover:border-b-2 hover:border-pink-500' to='/products/4'>Accessories</Link>
          </div>
        </div>

        {/* Center section */}

        <div className=''>
          <Link className='flex items-center gap-2' to='/'>
            <span><img src="/dev.png" className='w-8 h-8' alt="" /></span>
            <span className='font-vina text-4xl text-yellow-300'>Mot<span className='text-pink-500'>Yeast</span></span>
            </Link>
        </div>

        {/* Right section */}

        <div>
          <div className='lg:flex items-center gap-4'>
            <span className='hidden lg:flex items-center gap-4'>
              <div>
                <Link className='hover:border-b-2 hover:border-pink-500' to='/'>Homepage</Link>
              </div>
              <div>
                <Link className='hover:border-b-2 hover:border-pink-500' to='/about'>About</Link>
              </div>
              <div>
                <Link className='hover:border-b-2 hover:border-pink-500' to='/contact'>Contact</Link>
              </div>
            </span>
            <span className='flex gap-4'>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
              <button className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <span className='flex justify-center items-center w-4 h-4 p-1 bg-pink-500 text-white text-[10px] rounded-[50%] -translate-x-2 - -translate-y-1'>0</span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar