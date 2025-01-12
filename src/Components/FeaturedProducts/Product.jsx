import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className="border rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300">

      <Link to={`/product/${product._id}`}>
        <img
          src={product.img}
          alt={product.product_name}
          className="w-full h-48 object-cover rounded-t-md"
        />
      </Link>

      <div className="p-4 space-y-2">
        <h2 className="text-[16px] text-gray-700 hover:text-green-500 transition duration-300">
          <Link to={`/product/${product._id}`}>{product.product_name}</Link>
        </h2>
      <div className="flex justify-between items-center">
      <p className=" font-bold text-xl">${product.price}</p>
     <div className="bg-gray-200 p-2 rounded-full">
     <IoBagHandleOutline className="text-xl text-black"></IoBagHandleOutline>
     </div>
      </div>
        <Link
          to={`/product/${product._id}`}
          className="inline-block  px-2 py-2 bg-green-500 text-white text-xs font-medium rounded-md hover:bg-green-600 transition duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
