import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
  
      <div className='border-2 shadow-md px-4 py-5'>
          <Link to={`/product/${product.id}`}>
          <img src={product.img} alt={product.product_name} /></Link>
       
        <h2 className='text-xl'>{product.product_name}</h2>
        <p className='font-bold'>Price: ${product.price}</p>
      </div>
  
  )
}

export default Product
