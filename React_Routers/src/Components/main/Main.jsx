import React, { useState } from 'react';

const Main = () => {
    // Initial items
    const itemsList = [
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 20 },
        { id: 3, name: 'Item 3', price: 30 },
        { id: 4, name: 'Item 4', price: 78 },
    ];

    // State to manage cart items
    const [cart, setCart] = useState([]);
            
    // Function to add an item to the cart
    const addToCart = (item) => {
        setCart([...cart, item]);
    };      

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId));
    };

    // Calculate total price of items in the cart
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div className="container mx-auto p-8">
            <div className="flex justify-between">
                {/* Item List */}
                <div className="w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Items</h2>
                    <ul className="space-y-4">
                        {itemsList.map((item) => (
                            <li key={item.id} className="flex justify-between items-center p-4 border border-gray-300 rounded-lg shadow-md">
                                <div>
                                    <h3 className="text-xl">{item.name}</h3>
                                    <p>${item.price}</p>
                                </div>
                                <button
                                    onClick={() => addToCart(item)}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                                >
                                    Add to Cart
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Cart */}
                <div className="w-1/2 ml-8">
                    <h2 className="text-2xl font-bold mb-4">Cart</h2>
                    {cart.length > 0 ? (
                        <>
                            <ul className="space-y-4">
                                {cart.map((item) => (
                                    <li key={item.id} className="flex justify-between items-center p-4 border border-gray-300 rounded-lg shadow-md">
                                        <div>
                                            <h3 className="text-xl">{item.name}</h3>
                                            <p>${item.price}</p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4">
                                <h3 className="text-xl font-bold">Total: ${totalPrice}</h3>
                            </div>
                        </>
                    ) : (
                        <p className="text-gray-500">Your cart is empty.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Main;
