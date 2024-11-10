import Product from "./Product";

const FeaturedProduct = ({ data }) => {
  return (
    <div className="px-4 md:px-16 lg:px-32">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 mt-3 text-center md:text-left">Featured Product</h2>
      <div className="text-center md:text-left mb-4 md:mb-8">
        <a href="" className="text-green-600 hover:text-green-800">View All</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-7">
        {data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
