

const categories = [
    { name: 'Vegetables', products: 165, icon: '🥕' },
    { name: 'Fresh Fruit', products: 137, icon: '🍒' },
    { name: 'River Fish', products: 34, icon: '🐟' },
    { name: 'Meat', products: 165, icon: '🥩' },
    { name: 'Water and Drinks', products: 48, icon: '🥤' },
    { name: 'Snacks', products: 105, icon: '🍪' },
];

const CategoryCard = ({ name, products, icon }) => (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 m-2 w-36 hover:border-green-500 hover:border-2 transition duration-200 ease-in-out">
        <div className="text-4xl mb-2">{icon}</div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">{products} Products</p>
    </div>
);

const TopCategory = () => (
    <div className="max-w-5xl mx-auto py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Top Category</h2>
        <div className="flex justify-center mb-4">
            <div className="border-t-4 border-green-500 w-20"></div>
        </div>
        <div className="flex overflow-x-auto justify-start space-x-4 px-2">
            {categories.map((category, index) => (
                <CategoryCard key={index} {...category} />
            ))}
        </div>
    </div>
);

export default TopCategory;
