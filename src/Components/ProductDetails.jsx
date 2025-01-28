import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const ProductDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [product, setProduct] = useState(null);
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const selectedProduct = data.find((product) => product._id === id);
    setProduct(selectedProduct || null);
  }, [id, data]);

  const handleAddToCart = async () => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need to be logged in to add items to the cart!',
      });
      return;
    }

    setIsLoading(true);

    const cartItems = {
      cartAuthor: user.email,
      product_name: product.product_name,
      price: product.price,
      img: product.img,
      description: product.description,
    };

    try {
      const res = await axios.post('http://localhost:5000/carts', cartItems);
      if (res.data.insertedId) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Added to Cart',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong while adding to the cart!',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!product) {
    return <div className="text-center py-20 text-gray-600">Product not found.</div>;
  }

  return (
    <div className="  w-[350px] lg:w-[900px] my-8 border-2 border-green-600 mx-auto mt-16  p-6 bg-white  rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Product Image */}
        <div className="w-full">
          {product.img ? (
            <img
              src={product.img}
              alt={product.product_name}
              className="w-full h-72 object-cover rounded-lg border-2 border-green-600"
            />
          ) : (
            <p className="text-gray-500">Image not available</p>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.product_name || 'Product Name'}</h1>
          <p className="text-gray-600 text-sm leading-6">
            {product.description?.length > 100
              ? `${product.description.substring(0, 100)}...`
              : product.description || 'No description available'}
          </p>
          <p className="text-xl font-semibold text-green-500">Price: ${product.price || 'N/A'}</p>
          <p className="text-yellow-500">
            Rating: <span className="font-bold">{product.rating || 'N/A'}</span> / 5
          </p>

          {/* Add to Cart Button */}
          <button
            className={`px-6 py-3 bg-green-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-green-600 transition duration-300 ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            onClick={handleAddToCart}
            disabled={!product._id || isLoading}
          >
            {isLoading ? 'Adding...' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
