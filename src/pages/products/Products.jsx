import React, { useState } from 'react'
import List from '../../components/list/List'
import { useParams } from 'react-router-dom';

const Products = () => {
  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  console.log(categoryId)

  const OptionsTitleCss = 'text-xl font-bold mb-2'
  const inputContainer = 'flex gap-2 ml-2 items-center'

  return (
    <div className='max-w-[1600px] mx-auto flex px-6 mt-12 relative'>
      {/* Left side (Options) */}
      <section className="mr-10">
        <div className='flex flex-col gap-4 sticky top-[70px]'>
          {/* Category picker */}
          <span className='flex flex-col'>
            <h2 className={OptionsTitleCss}>Product Categories</h2>
            <span className={inputContainer}>
              <input type="checkbox" id='1' value={1}/>
              <label htmlFor="checkbox">Mens</label>
            </span> 
            <span className={inputContainer}>
              <input type="checkbox" id='2' value={2}/>
              <label htmlFor="checkbox">Womens</label>
            </span> 
            <span className={inputContainer}>
              <input type="checkbox" id='3' value={3}/>
              <label htmlFor="checkbox">Kids</label>
            </span> 
            <span className={inputContainer}>
              <input type="checkbox" id='4' value={4}/>
              <label htmlFor="checkbox">Accesories</label>
            </span> 
            <span className={inputContainer}>
              <input type="checkbox" id='5' value={5}/>
              <label htmlFor="checkbox">Other</label>
            </span> 
          </span> 
          {/* Price Filter */}
          <span>
            <h2 className={OptionsTitleCss}>Filter by Price</h2>
            <div className={inputContainer}>
              <span>0</span>
              <span>
                <input onChange={e => setMaxPrice(e.target.value)} className='h-full' type="range" min={0} max={1000}/>
              </span>
              <span className='min-w-[40px]'>{maxPrice}</span>
            </div>
          </span> 
          {/* Sort Picker */}
          <span className='flex flex-col'>
            <h2 className={OptionsTitleCss}>Sort by</h2>
            <span className={inputContainer}>
              <input type="radio" id='asc' value='asc' name='price' onChange={e=>setSort('asc')}/>
              <label htmlFor="asc">Price (Lowest first)</label>
            </span>
            <span className={inputContainer}>
              <input type="radio" id='desc' value='desc' name='price' onChange={e=>setSort('desc')}/>
              <label htmlFor="desc">Price (Highest first)</label>
            </span>
          </span> 

        </div>
      </section>

    {/* Right side */}

      <section className='flex flex-col flex-1 mb-[6rem]'>
        <img className='w-full h-full max-h-[300px] object-cover mb-10 rounded-lg' src="https://images.pexels.com/photos/942305/pexels-photo-942305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Products banner" />
          <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
      </section>
    </div>
  )
}

export default Products