import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Product from '../Components/FeaturedProducts/Product'

const Shop = () => {
  const products=useLoaderData()
  return (
    <div className='max-w-5xl mx-auto mt-10'>
      <h1 className="text-3xl text-center font-bold mb-5">ALL PRODUCTS</h1>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-7'>
      {
        products.map(product=> <Product key={product._id} product={product}></Product>)
      }
     </div>
    </div>
  )
}

export default Shop