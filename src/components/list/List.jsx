import React from 'react'
import Card from '../card/Card'
import data from '../../data/data'

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