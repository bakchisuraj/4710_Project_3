import React from "react";

export default function Cart({ isOpen, toggleCart }) {
    // Dummy cart data
    const cartItems = [
        { id: 1, name: "Product 1", price: 19.99 },
        { id: 2, name: "Product 2", price: 29.99 },
        { id: 3, name: "Product 3", price: 9.99 },
    ];

    const total = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={toggleCart}
            ></div>
            <div
                className={`fixed top-0 right-0 w-72 h-full bg-white shadow-xl transform transition-all duration-300 ease-in-out z-50 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="p-4">
                    <button
                        onClick={toggleCart}
                        className="text-gray-700 p-2 rounded-md focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <h2 className="text-xl font-bold mt-4">Your Cart</h2>
                    <div className="mt-6">
                        {cartItems.length > 0 ? (
                            <ul>
                                {cartItems.map((item) => (
                                    <li key={item.id} className="flex justify-between mb-4">
                                        <span>{item.name}</span>
                                        <span>${item.price.toFixed(2)}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Your cart is empty</p>
                        )}
                        <div className="mt-6 border-t pt-4">
                            <div className="flex justify-between">
                                <span className="font-bold">Total</span>
                                <span>${total}</span>
                            </div>
                            <button className="w-full bg-red-700 text-white py-2 mt-4 rounded-lg">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
