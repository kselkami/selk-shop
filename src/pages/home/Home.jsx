import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import FeaturedProducts from '../../components/productCarousel/ProductCarousel'
import Categories from '../../components/categories/Categories'
import Contact from '../../components/contact/Contact'

const Home = () => {
  return (
    <div className=''>
      <section className='w-full mt-6 mb-24 px-4 max-w-[1200px] mx-auto'>
        <Carousel />
      </section>
      <section className='w-full mb-24 px-4 max-w-[1200px] mx-auto'>
        <FeaturedProducts type={'Featured'}/>
      </section>
      <section className='w-full mb-24 px-4 max-w-[1200px] mx-auto'>
        <Categories/>
      </section>
      {/* <section className='w-full mb-6 px-4 max-w-[1200px] mx-auto'>
        <FeaturedProducts type={'Trending'}/>
      </section> */}
      <section className='w-full mx-auto'>
        <Contact/>
      </section>
    </div>
  )
}

export default Home