import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams() ;
  const data=useLoaderData()
  const [product, setProduct] = useState({});
  useEffect(() => {
    const selectedProduct = data.find(product => product.id === parseInt(id));
    setProduct(selectedProduct || {});
}, [id, data]);


  

  return (
    <div className="mx-auto w-[400px] ">
      <div className="product-detail-image">
        <img className='mx-auto' src={product.img} alt={product.product_name} />
      </div>
      <div className="product-detail-info">
        <h1 className="text-2xl">{product.product_name}</h1>
        <p>{product.description}</p>
        <p className="font-bold">Price: ${product.price}</p>
        <p>Rating: {product.rating} / 5</p>
      </div>
    </div>
  )
}

export default ProductDetails
