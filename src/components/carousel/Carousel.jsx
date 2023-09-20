import React, {useState} from 'react'

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const images = [
        'https://burst.shopifycdn.com/photos/standing-with-skateboard.jpg?width=925&format=pjpg&exif=1&iptc=1',
        'https://burst.shopifycdn.com/photos/skateboarding.jpg?width=925&format=pjpg&exif=1&iptc=1',
        'https://burst.shopifycdn.com/photos/grinding-a-ledge-with-a-skateboard.jpg?width=925&format=pjpg&exif=1&iptc=1',
        'https://burst.shopifycdn.com/photos/beige-fashion-trainers.jpg?width=925&format=pjpg&exif=1&iptc=1',
        'https://burst.shopifycdn.com/photos/feet-wearing-white-patterned-trainers.jpg?width=925&format=pjpg&exif=1&iptc=1',
    ]

    const prevSlide = () => {
        setCurrent(current == 0 ? 4 : (prev) => prev - 1)
    }
    const nextSlide = () => {
        setCurrent(current == 4 ? 0 : (prev) => prev + 1)

    }

  return (
    <div className='p-[3px] bg-gradient-to-tr from-yellow-400 to-pink-500'>
        
        <div className='mx-auto w-[calc(100%)] max-h-[420px] overflow-hidden relative'>
            <div >
                {/* <div className='absolute w-full h-full bg-gradient-to-r from-pink-500 to-yellow-200 z-10 opacity-50'></div> */}
                <div className='absolute w-full h-full bg-black z-10 opacity-60'></div>
                <div className={`w-[500vw] flex h-full transition-all duration-[800ms] ease-in-out`}  style={{transform: `translateX(-${current * 100}vw`}}>
                    <img className='w-screen h-full object-cover object-bottom' src={images[0]} alt="0" />
                    <img className='w-screen h-full object-cover object-bottom' src={images[1]} alt="1" />
                    <img className='w-screen h-full object-cover object-bottom' src={images[2]} alt="2" />
                    <img className='w-screen h-full object-cover object-bottom' src={images[3]} alt="3" />
                    <img className='w-screen h-full object-cover object-bottom' src={images[4]} alt="4" />
                </div>
                <div className='absolute right-2 bottom-2 flex gap-4 z-20'>
                    <button onClick={prevSlide} className='p-2 px-4 lg:p-3 lg:px-6 border border-pink-500/30 bg-pink-800/20 rounded-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5}  className="w-6 h-6 stroke-pink-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                    <button onClick={nextSlide} className='p-2 px-4 lg:p-3 lg:px-6 border border-yellow-300/30 bg-yellow-300/10 rounded-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  className="w-6 h-6 stroke-yellow-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carousel