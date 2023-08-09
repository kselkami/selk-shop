import React from 'react'
import Card from '../card/Card'

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

const List = () => {
  return (
    <div className='w-full'>
        <div className='grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
            {data?.map((product) => (
                <Card product={product} key={product.id} heightProp={300}/>
            ))}         
        </div>
    </div>
  )
}

export default List