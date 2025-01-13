const categories = [
    { name: 'Vegetables', products: 165, image: 'https://i.ibb.co/PzCF9cc/Vegetable.png' },
    { name: 'Fresh Fruit', products: 137, image: 'https://i.ibb.co/ySqMVrY/fruits-1.png' },
    { name: 'River Fish', products: 34, image: 'https://i.ibb.co/LgWxWMb/fish-1.png' },
    { name: 'Meat', products: 165, image: 'https://i.ibb.co/NFfGSCT/meat-1.png' },
    { name: 'Water and Drinks', products: 48, image: 'https://i.ibb.co/zHqhFdf/soft-drink-1.png' },
    { name: 'Snacks', products: 105, image: 'https://i.ibb.co/S5L58cc/snacks-1.png' },
  ];
  
  const CategoryCard = ({ name, products, image }) => (
    <div className="flex flex-col items-center bg-white rounded-lg border border-gray-100 p-4 m-2 w-44 hover:border-green-500 hover:border-2 ">
      <img src={image} alt={name} className="h-16 w-16 mb-2  object-cover" />
      <h3 className="text-sm font-semibold">{name}</h3>
      <p className="text-gray-500">{products} Products</p>
    </div>
  );
  
  const TopCategory = () => (
    <div className="max-w-6xl mx-auto py-8 mt-12">
      <h2 className="text-3xl font-bold text-center mb-6">Top Category</h2>
      <div className="flex justify-center mb-4">
        <div className="border-t-4 border-green-500 w-20"></div>
      </div>
     
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
        {categories.map((category) => (
          <CategoryCard key={category.name} {...category} />
        ))}
      </div>
    </div>
  );
  
  export default TopCategory;
  