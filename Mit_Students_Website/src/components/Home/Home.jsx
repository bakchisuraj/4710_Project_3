import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar suggestions/Sidebar";

export default function Home() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="mx-auto w-full">
            <div className="lg:hidden p-4">
                <button
                    onClick={toggleSidebar}
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
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            <div className="flex">
                <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                
                <div
                    className={`flex-1 p-5 transition-all duration-300 ease-in-out ${
                    sidebarOpen ? "ml-0" : "ml-0"
                } max-w-full mx-auto`}
                >
                    <aside className="chodu relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                            <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                                <h3 className="text-4xl font-bold sm:text-5xl">
                                    Explore Now
                                </h3>
                                <h2>
                                    <span className="hidden sm:block text-4xl">
                                        MIT Marketplace
                                    </span>
                                </h2>

                                <p className="text-gray-800">
                                    Your one-stop solution for exclusive products and deals!
                                </p>

                                <Link
                                    className="inline-flex text-white items-center px-6 py-3 font-medium bg-red-700 rounded-lg hover:bg-red-800 transition duration-300"
                                    to="/"
                                >
                                    <svg
                                        fill="white"
                                        width="24"
                                        height="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    >
                                        <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                    </svg>
                                    &nbsp; Download App
                                </Link>
                            </div>
                        </div>

                        <div className="absolute inset-0 w-250 sm:my-20 sm:pt-1 pt-12 h-100">
                            <img
                                className="w-250 object-cover"
                                src="https://img.pikbest.com/origin/06/30/60/89ppIkbEsTD7K.jpg!w700wp"
                                alt="Promotional Banner"
                            />
                        </div>
                    </aside>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 px-4">
                <Link to="/electronics" className="relative group">
                    <img className="w-full h-auto rounded-lg shadow-md transition-transform transform group-hover:scale-105" src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/887753a581e879af.png?q=20" alt="Electronics Sale" />
                </Link>
                <Link to="/fashion" className="relative group">
                    <img className="w-full h-auto rounded-lg shadow-md transition-transform transform group-hover:scale-105" src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/49e542b597409a71.png?q=20" alt="Fashion Deals" />
                </Link>
                <Link to="/laptops" className="relative group">
                    <img className="w-full h-auto rounded-lg shadow-md transition-transform transform group-hover:scale-105" src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/e25f155035a2b662.jpg?q=20" alt="Laptop Deals" />
                </Link>
                <Link to="/headphones" className="relative group">
                    <img className="w-full h-auto rounded-lg shadow-md transition-transform transform group-hover:scale-105" src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/4ddd4a135657a6e4.jpeg?q=20" alt="Headphone Offers" />
                </Link>
            </div>

            <div className="relative mt-10 px-4 text-center">
                <img className="w-full h-auto rounded-lg shadow-lg" src="https://m.media-amazon.com/images/G/31/IMG24/Smart_Watches/JAN_ART25/ELP/Most_Awaiting_Deals_Laptops_new._CB553042048_.gif" alt="Most Awaiting Deals" />
            </div>

            <div className="py-10 text-center bg-gray-50">
                <h1 className="text-2xl sm:text-5xl font-bold text-gray-800">Discover Our Categories</h1>
                <p className="mt-4 text-gray-600">Shop the latest trends and deals!</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 px-4">
                    <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
                        <h2 className="text-xl font-bold text-gray-800">Electronics</h2>
                        <p className="mt-2 text-gray-600">Find the latest gadgets and tech essentials.</p>
                        <Link to="/electronics" className="text-red-700 hover:underline mt-4 inline-block">Shop Now</Link>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
                        <h2 className="text-xl font-bold text-gray-800">Fashion</h2>
                        <p className="mt-2 text-gray-600">Upgrade your wardrobe with trendy outfits.</p>
                        <Link to="/fashion" className="text-red-700 hover:underline mt-4 inline-block">Shop Now</Link>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
                        <h2 className="text-xl font-bold text-gray-800">Home Decor</h2>
                        <p className="mt-2 text-gray-600">Beautify your home with unique pieces.</p>
                        <Link to="/home-decor" className="text-red-700 hover:underline mt-4 inline-block">Shop Now</Link>
                    </div>
                </div>
            </div>

            <div className="bg-red-700 text-white text-center py-10">
                <h2 className="text-3xl sm:text-4xl font-bold">Don't Miss Out!</h2>
                <p className="mt-4">Subscribe to our newsletter and stay updated on the best deals.</p>
                <div className="mt-6 flex justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 w-1/2 max-w-lg rounded-l-lg bg-black focus:outline-none"
                    />
                    <button className="px-4 py-2 bg-white text-red-700 font-bold rounded-r-lg hover:bg-gray-100">Subscribe</button>
                </div>
            </div>
        </div>
    );
}
