import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='flex flex-col'>

        {/* background blob start */}
        <span className='absolute right-0 top-[-50%]'>
            <span className='z-[-1] absolute h-[15rem] w-[8rem] rounded-[50%] bg-pink-400 opacity-20 blur-[70px] translate-x-[90%] translate-y-[20%]'></span>
            <span className='z-[-1] absolute h-[15rem] w-[8rem] rounded-[50%] bg-yellow-200  opacity-20 blur-[70px] translate-x-[20%] translate-y-[0%]'></span>
        </span>
        <span className='absolute left-[-25%] top-[-50%]'>
            <span className='z-[-1] absolute h-[15rem] w-[8rem] rounded-[50%] bg-yellow-200 opacity-20 blur-[70px] translate-x-[90%] translate-y-[20%]'></span>
            <span className='z-[-1] absolute h-[15rem] w-[8rem] rounded-[50%] bg-pink-400  opacity-20 blur-[70px] translate-x-[20%] translate-y-[0%]'></span>
        </span>
        {/* background blob end */}

        <div className='ml-6 text-5xl mb-10'>
            Categories
        </div>

        {/* 
            CSS for grid when container is converted to grid
            
            .parent {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-template-rows: repeat(2, 1fr);
                grid-column-gap: 12px;
                grid-row-gap: 12px;
            }

            .div1 { grid-area: 1 / 1 / 2 / 2; }
            .div2 { grid-area: 2 / 1 / 3 / 2; }
            .div3 { grid-area: 1 / 2 / 3 / 3; }
            .div4 { grid-area: 1 / 3 / 2 / 4; }
            .div5 { grid-area: 1 / 4 / 2 / 5; }
            .div6 { grid-area: 2 / 3 / 3 / 5; }
        
        */}

        <div className='flex h-[80vh] gap-3 relative'>
            <div className='flex-1 flex flex-col gap-3'>
                <div className='flex-1 flex gap-3 relative rounded-lg overflow-hidden'>
                    <img className='w-full h-full object-cover' src="https://i.pinimg.com/736x/03/5b/10/035b10cc8067d32b0eb959166f2f7f77.jpg" alt="" />
                        <Link to={`/products/1`}>
                            <button className='px-4 py-2 bg-white text-black rounded-md absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]'>
                                Mens
                            </button>
                        </Link>
                </div>
                <div className='flex-1 flex gap-3 relative rounded-lg overflow-hidden'>
                    <img className='w-full h-full object-cover' src="https://i.pinimg.com/736x/3d/bb/5d/3dbb5dfd0dab86f731e70ef452922c92.jpg" alt="" />
                        <Link to={`/products/2`}>
                            <button className='px-4 py-2 bg-white text-black rounded-md absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]'>
                                Womans
                            </button>
                        </Link>
                </div>
            </div>
            <div className='flex-1 flex flex-col gap-3'>
                <div className='flex-1 flex gap-3 relative rounded-lg overflow-hidden'>
                    <img className='w-full h-full object-cover' src="https://i.pinimg.com/736x/b0/64/38/b06438d673a6dd96066274ca943ebe37.jpg" alt="" />
                        <Link to={`/products/3`}>
                            <button className='px-4 py-2 bg-white text-black rounded-md absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]'>
                                Kids
                            </button>
                        </Link>
                </div>
            </div>
            <div className='flex-[2] flex flex-col gap-3'>
                <div className='flex-1 flex gap-3'>
                    <div className='flex-1 flex flex-col gap-3'>
                        <div className='flex-1 flex gap-3 relative rounded-lg overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://i.pinimg.com/736x/b9/69/3b/b9693bebb2085fcc9fd33afb559582a8.jpg" alt="" />
                                <Link to={`/products/4`}>
                                    <button className='px-4 py-2 bg-white text-black rounded-md absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]'>
                                        Accessories
                                    </button>
                                </Link>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col gap-3'>
                        <div className='flex-1 flex gap-3 relative rounded-lg overflow-hidden'>
                            <img className='w-full h-full object-cover' src="https://i.pinimg.com/736x/04/16/fa/0416fa210f431e0ed914df7431ecc0ed.jpg" alt="" />
                                <Link to={`/products/5`}>
                                    <button className='px-4 py-2 bg-white text-black rounded-md absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]'>
                                        Shoes
                                    </button>
                                </Link>
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex gap-3'>
                    <div className='flex-1 flex gap-3 relative rounded-lg overflow-hidden'>
                        <img className='w-full h-full object-cover' src="https://i.pinimg.com/736x/33/79/cc/3379ccad824f33b7c7931e638952ea03.jpg" alt="" />
                            <Link to={`/products/6`}>
                                <button className='px-4 py-2 bg-white text-black rounded-md absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]'>
                                    Other
                                </button>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories