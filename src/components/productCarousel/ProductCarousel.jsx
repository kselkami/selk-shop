import React , { useState } from 'react'
import Card from '../card/Card'

const FeaturedProducts = ({type}) => {
    const [current, setCurrent] = useState(0);
    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/1895019/pexels-photo-1895019.jpeg?auto=compress&cs=tinysrgb&w=300',
            title: `Nike Air Max Infinity`,
            isNew: true,
            oldPrice: 119,
            price: 89,
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/67800/shoes-depend-leash-sky-67800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: `Adidas Ultra Boost Runner`,
            isNew: false,
            oldPrice: 175,
            price: 135,
        },
            
        {
            id: 3,
            img: 'https://images.pexels.com/photos/1476209/pexels-photo-1476209.jpeg?auto=compress&cs=tinysrgb&w=300',
            img2: 'https://images.pexels.com/photos/5470890/pexels-photo-5470890.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: `Puma Ignite Evoknit`,
            isNew: true,
            oldPrice: 199,
            price: 159,
        },
            
        {
            id: 4,
            img: 'https://images.pexels.com/photos/3194609/pexels-photo-3194609.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/1447262/pexels-photo-1447262.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: `Reebok Classic Leather`,
            isNew: false,
            oldPrice: 250,
            price: 210,
        },
        {
            id: 5,
            img: 'https://images.pexels.com/photos/3194609/pexels-photo-3194609.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/1447262/pexels-photo-1447262.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: `Reebok Classic Leather`,
            isNew: false,
            oldPrice: 250,
            price: 210,
        },
        {
            id: 6,
            img: 'https://images.pexels.com/photos/3194609/pexels-photo-3194609.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/1447262/pexels-photo-1447262.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: `Reebok Classic Leather`,
            isNew: false,
            oldPrice: 250,
            price: 210,
        },
    ]

    function nextSlide() {
        current === 0 ? setCurrent(current + 1) : setCurrent(0);
    }

    // .bg-blur {
    //     position: absolute;
    //     left: 40%;
    //     top: -10%;
    // }
    
    // .blur-1,.blur-2,.blur-3 {
    //     z-index: -1;
    //     position: absolute;
    //     height: 10rem;
    //     width: 10rem;
    //     border-radius: 50%;
    //     filter: blur(100px);
    //     opacity: 0.8;
    // }
    
    // .blur-1 {
    //     transform: translate( 90%,-20%);
    //     background-color: #a26cff;
    // }
    
    // .blur-2 {
    //     transform: translate(20%, 0);
    //     background-color: #ff2f2f;
    // }
    
    // .blur-3 {
    //     transform: translate( -50%,-20%);
    //     background-color: #face54;
    // }

  return (
    <div className='flex flex-col items-start relative'>

        {/* background blob start */}
            <span className='absolute left-[-30%] top-[-30%]'>
                <span className='z-[-1] absolute h-[15rem] w-[8rem] rounded-[50%] bg-pink-400 opacity-20 blur-[70px] translate-x-[90%] translate-y-[20%]'></span>
                <span className='z-[-1] absolute h-[15rem] w-[8rem] rounded-[50%] bg-yellow-200  opacity-20 blur-[70px] translate-x-[20%] translate-y-[0%]'></span>
            </span>
            <span className='absolute right-[-10%] top-[-30%]'>
                <span className='z-[-1] absolute h-[15rem] w-[8rem] rounded-[50%] bg-yellow-200 opacity-20 blur-[70px] translate-x-[90%] translate-y-[20%]'></span>
                <span className='z-[-1] absolute h-[15rem] w-[8rem] rounded-[50%] bg-pink-400  opacity-20 blur-[70px] translate-x-[20%] translate-y-[0%]'></span>
            </span>
        {/* background blob end */}

        <div className='flex gap-6 items-start mb-12'>
            <span className='flex-[1]'>
                <h1 className='flex-[1] ml-6 text-3xl lg:text-5xl' >{type}</h1>
            </span>
            <span className='flex-[4]'>
                <p className='flex-[2] ml-auto mr-[50px] w-[60%] text-sm md:text-[16px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempora ducimus corporis beatae ipsa nam rem consequuntur architecto assumenda unde.</p>
            </span>
        </div>
        <div className='flex-grow relative overflow-hidden'>

                { current === 0 && <button onClick={nextSlide} className='flex items-center justify-center p-2 w-10 h-10 absolute top-[50%] translate-y-[-70%] right-1 z-[20]  bg-pink-600 rounded-lg border-2 border-yellow-200'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  className="w-6 h-6 stroke-yellow-200 stroke-2 ">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                    </button>}

                { current === 1 && <button onClick={nextSlide} className=' flex items-center justify-center p-2 w-10 h-10 absolute top-[50%] translate-y-[-70%] left-1 z-[20] bg-pink-600 rounded-lg border-2 border-yellow-200'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5}  className="w-6 h-6 stroke-yellow-200 stroke-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                        </svg>
                                    </button>}

            {/* Container is 120% wide, tailwind is used to conditionally translate X by 17% to the left according to the state of 'current' */}

            <div className={`w-[200%] lg:w-[150%]  grid grid-cols-6 grid-flow-row-dense gap-3 relative overflow-hidden transition-all duration-700 ${current === 1 ? 'translate-x-[-50%] lg:translate-x-[-34%]' : ''}`}>
                {data?.map((product) => (
                    <Card product={product} key={product.id}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FeaturedProducts