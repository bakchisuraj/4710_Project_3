import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";  // Assuming the Cart component is in the same directory

function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xxl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5nkhcs0lu3r9RU-FyFk-6A766W9ncxCSV0kXCYCHMoT5Bog24lXIjktrWklrDceUkmc&usqp=CAU"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="login"
                            className="text-gray-800 hover:bg-gray-300 hover:text-red-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="register"
                            className="text-white bg-red-700 hover:bg-red-800  focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                        <Link
                            to="logout"
                            className="text-gray-800 hover:bg-gray-300 hover:text-red-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log Out
                        </Link>
                        <Link
                            to="profile"
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            <i className="fas fa-user mr-2"></i> Profile
                        </Link>

                        <button
                            onClick={toggleCart}
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            <i className="fas fa-shopping-cart mr-2"></i> Cart
                        </button>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to='/'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive
                                        ?"text-red-700"
                                        :"text-gray-700"
                                        }
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/studentrecommendation'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive?
                                        "text-red-700":
                                        "text-gray-700"}`}
                                    >
                                    Want Recommendation?
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/about'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive?
                                        "text-red-700":
                                        "text-gray-700"}`}
                                    >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/contact'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive?
                                        "text-red-700":
                                        "text-gray-700"}`}
                                    >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/checkout'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive?
                                        "text-orange-700":
                                        "text-gray-700"}`}
                                    >
                                    Checkout
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/feedback'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive?
                                        "text-orange-700":
                                        "text-gray-700"}`}
                                    >
                                    Feedback
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='/community'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive?
                                        "text-orange-700":
                                        "text-gray-700"}`}
                                    >
                                    Community
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
        </header>
    );
}

export default Header;
