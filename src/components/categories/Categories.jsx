import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='flex flex-col relative'>

        {/* background blob start */}

            {/* Was messing with the pages margins */}

            {/* <span className='absolute left-[-30%] top-[-10%]'>
                <span className='z-[-1] absolute h-[15rem] w-[8rem] rounded-[50%] bg-pink-400 opacity-20 blur-[70px] translate-x-[90%] translate-y-[20%]'></span>
                <span className='z-[-1] absolute h-[15rem] w-[8rem] rounded-[50%] bg-yellow-200  opacity-20 blur-[70px] translate-x-[20%] translate-y-[0%]'></span>
            </span>
            <span className='absolute right-[-10%] top-[-10%]'>
                <span className='z-[-1] absolute h-[15rem] w-[8rem] rounded-[50%] bg-yellow-200 opacity-20 blur-[70px] translate-x-[90%] translate-y-[20%]'></span>
                <span className='z-[-1] absolute h-[15rem] w-[8rem] rounded-[50%] bg-pink-400  opacity-20 blur-[70px] translate-x-[20%] translate-y-[0%]'></span>
            </span> */}
        {/* background blob end */}


        {/* Heading */}

        <div className='ml-6 text-5xl mb-12'>
            Categories
        </div>

        {/* Grid container */}

        <div className='grid grid-cols-[repeat(4,1fr)] grid-rows-[repeat(2,1fr)] h-[80vh] gap-3 relative'>
            <div className='relative rounded-lg overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://i.ibb.co/jrN4Sp8/mens-cat.png" alt="mens category" />
                    <Link to={`/products/1`}>
                        <button className='px-4 py-2 border border-black bg-white text-black hover:bg-black hover:text-white rounded-md absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]'>
                            Mens
                        </button>
                    </Link>
            </div>
            <div className='relative rounded-lg overflow-hidden row-start-2'>
                <img className='w-full h-full object-cover' src="https://i.ibb.co/H7RnPcr/women-cat.png" alt="womans category" />
                    <Link to={`/products/2`}>
                        <button className='px-4 py-2 border border-black bg-white text-black hover:bg-black hover:text-white rounded-md absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]'>
                            Womans
                        </button>
                    </Link>
            </div>
            <div className='relative rounded-lg overflow-hidden row-span-2'>
                <img className='w-full h-full object-cover' src="https://i.ibb.co/bP5Qjw1/kids-cat.png" alt="kids category" />
                    <Link to={`/products/3`}>
                        <button className='px-4 py-2 border border-black bg-white text-black hover:bg-black hover:text-white rounded-md absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]'>
                            Kids
                        </button>
                    </Link>
            </div>
            <div className='relative rounded-lg overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://i.ibb.co/M1hbKVn/accessory-cat.png" alt="accessories catergory" />
                    <Link to={`/products/4`}>
                        <button className='px-4 py-2 border border-black bg-white text-black hover:bg-black hover:text-white rounded-md absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]'>
                            Accessories
                        </button>
                    </Link>
            </div>
            <div className='relative rounded-lg overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://i.ibb.co/F6TrQBz/shoes-cat.png" alt="shoes catergory" />
                    <Link to={`/products/5`}>
                        <button className='px-4 py-2 border border-black bg-white text-black hover:bg-black hover:text-white rounded-md absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]'>
                            Shoes
                        </button>
                    </Link>
            </div>
            <div className='relative rounded-lg overflow-hidden col-span-2'>
                <img className='w-full h-full object-cover' src="https://i.ibb.co/HVpNst5/others-2-cat.png" alt="other category" />
                    <Link to={`/products/6`}>
                        <button className='px-4 py-2 border border-black  bg-white text-black hover:bg-black hover:text-white rounded-md absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]'>
                            Other
                        </button>
                    </Link>
            </div>
        </div>
    </div>
  )
}

export default Categories