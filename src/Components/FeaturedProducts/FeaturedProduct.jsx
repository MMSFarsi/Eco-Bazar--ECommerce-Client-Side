import { Link } from "react-router-dom";
import Product from "./Product";

const FeaturedProduct = ({ data }) => {
  return (
    <div className="px-4 md:px-16 lg:px-24 mt-12">
             <h2 className="text-3xl font-bold text-center mb-6">Featured Product</h2>
        <div className="flex justify-center mb-4">
            <div className="border-t-4 border-green-500 w-20"></div>
        </div>
      <div className="text-center md:text-left mb-4 md:mb-8">
        <Link to='/shop' className="text-green-600 btn btn-sm btn-outline hover:text-white">View All</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 ">
        {data.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
