import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const data = useLoaderData(); // Data loaded via React Router
  const [product, setProduct] = useState({});

  useEffect(() => {
    // Find the product by matching the _id field
    const selectedProduct = data.find((product) => product._id === id);
    setProduct(selectedProduct || {});
  }, [id, data]); // Depend on 'id' and 'data'

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Product Image */}
        <div className="w-full">
          {product.img ? (
            <img
              src={product.img}
              alt={product.product_name}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          ) : (
            <p className="text-gray-500">Image not available</p>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.product_name || "Product Name"}</h1>
          <p className="text-gray-600">{product.description || "No description available"}</p>
          <p className="text-lg font-semibold text-green-500">
            Price: ${product.price || "N/A"}
          </p>
          <p className="text-yellow-500">
            Rating: <span className="font-bold">{product.rating || "N/A"}</span> / 5
          </p>

          {/* Add to Cart Button */}
          <button
            className="px-6 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition duration-300"
            disabled={!product._id}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
