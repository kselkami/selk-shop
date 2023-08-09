import React from 'react'

const Footer = () => {
  return (
    <div className='w-full px-6 mt-auto max-w-[1200px] mx-auto text-white'>

      {/* TOP */}

      <div className='flex justify-between gap-10 md:gap-24 mt-16 mb-16 text-justify'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-xl'>Categories</h1>
          <span className='flex flex-col text-white/80 gap-[4px]'>
            <span>Women</span>
            <span>Men</span>
            <span>Children</span>
            <span>Accessories</span>
            <span>New</span>

          </span>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-xl'>Links</h1>
          <span className='flex flex-col text-white/80 gap-[4px]'>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Compare</span>
            <span>Cookies</span>
          </span>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-xl'>About</h1>
          <p className='w-full max-w-[300px] text-white/80'>Lorem ipsum dolor sit,  sdgsd gs dg sgsg consectetur adipisicing elit. Et neque nihil tempora ea magni blanditiis enim libero velit doloribus laboriosam.</p>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-xl'>Contact</h1>
          <p className='w-full max-w-[300px] text-white/80'>Lorem ipsum dolor sit amet sg s gsfgsdgs consectetur, adipisicing elit. Magni aut ullam quas natus, recusandae eos magnam quaerat deserunt iusto laborum.</p>
        </div>
      </div>

      {/* BOTTOM */}

      <div className='flex justify-between my-8'>
        <div className='flex gap-10 items-center'>
          <div className='md:text-xl'><span className='text-pink-500'>MotY<span className='text-yellow-300'>east</span></span></div>
          <div>Copyright</div>
        </div>
        
        <div className='ml-auto'>
          <img className='h-auto w-48' src="img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer