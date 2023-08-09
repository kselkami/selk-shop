import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Card = ({product, heightProp}) => {
    const [isHovered, setIsHovered] = useState(false)

  return (
    <Link className='w-full max-w-[350px] rounded-lg' to={`product/${product.id}`} key={product.id}>
        {/* <div className='p-3 w-full h-full rounded-lg bg-gradient-to-tr from-yellow-200 to-pink-500'> */}
        <div className='w-full rounded-lg' style={{minHeight: heightProp + 'px'}}>
        <div 
        onMouseEnter={()=> setIsHovered(true)}
        onMouseLeave={()=> setIsHovered(false)}
        className='relative rounded-lg h-full flex flex-col gap-3'>
            {product.isNew &&<span className='absolute z-[1] py-1 px-2 bg-slate-200 text-black top-2 left-2 rounded-md'>New Season</span>}
                {isHovered? (
                        <img className='h-full max-h-[300px] min-w-full object-cover rounded-lg' src={product.img2} alt={product.img2} />
                    ) : (
                        <img className='h-full max-h-[300px] object-cover rounded-lg' src={product.img} alt={product.img} />
                )}


            <div className='flex flex-col gap-1 text-black pl-2'>
                <h3 className='text-md mt-2'>{product.title}</h3>
                <div className='flex gap-2'>
                    <p className='text-md line-through text-red-300'>P {product.oldPrice}</p>
                    <p className='text-xl font-bold'>P {product.price}</p>
                </div>
            </div>
        </div>
        </div>
    </Link>
  )
}

export default Card