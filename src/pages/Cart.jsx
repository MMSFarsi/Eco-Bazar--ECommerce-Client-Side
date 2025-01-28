import React from 'react';
import useCart from '../hooks/useCart';

const Cart = () => {
    const [cart, removeFromCart] = useCart(); // Assuming useCart provides a removeFromCart function

    const handlePay = (product) => {
        // Implement payment logic here
        console.log('Paying for:', product);
    };

    const handleDelete = (productId) => {
        // Implement delete logic here
        removeFromCart(productId);
    };

    return (
        <div className="p-6 max-w-6xl mx-auto font-sans">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Cart</h1>
            {cart.length === 0 ? (
                <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
            ) : (
                <table className="w-full shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-green-600 text-white">
                        <tr>
                            <th className="p-3 text-left">Image</th>
                            <th className="p-3 text-left">Product Name</th>
                            <th className="p-3 text-left">Description</th>
                            <th className="p-3 text-left">Price</th>
                            <th className="p-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product) => (
                            <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                <td className="p-3">
                                    <img
                                        src={product.img}
                                        alt={product.product_name}
                                        className="w-12 h-12 rounded object-cover"
                                    />
                                </td>
                                <td className="p-3 text-gray-700">{product.product_name}</td>
                                <td className="p-3 text-gray-600">{product.description.substring(0, 90)}</td>

                                <td className="p-3 text-gray-700">${product.price}</td>
                                <td className="p-3">
                                    <button
                                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors mr-2"
                                        onClick={() => handlePay(product)}
                                    >
                                        Pay
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                                        onClick={() => handleDelete(product.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Cart;