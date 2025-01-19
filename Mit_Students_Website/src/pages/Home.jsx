import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";


export default function Home() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="home-container">
            <div className="mobile-menu">
                <button onClick={toggleSidebar} className="menu-button">
                    <svg
                        className="menu-icon"
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

            <div className="main-content">
                <div className="banner">
                    <aside className="banner-content">
                        <div className="banner-text">
                            
                            <h1>MIT Student's Hub</h1>
                            <p>Your one-stop solution for exclusive products and deals!</p>
                            <Link to="/" className="download-button">
                                <svg
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                >
                                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                </svg>
                                Download App
                            </Link>
                        </div>
                        <div className="banner-image">
                            <img
                                src="https://img.pikbest.com/origin/06/30/60/89ppIkbEsTD7K.jpg!w700wp"
                                alt="Promotional Banner"
                            />
                        </div>
                    </aside>
                </div>

                <div className="category-grid">
                    <Link to="/electronics">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/887753a581e879af.png?q=20" alt="Electronics Sale" />
                    </Link>
                    <Link to="/fashion">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/49e542b597409a71.png?q=20" alt="Fashion Deals" />
                    </Link>
                    <Link to="/laptops">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/e25f155035a2b662.jpg?q=20" alt="Laptop Deals" />
                    </Link>
                    <Link to="/headphones">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/4ddd4a135657a6e4.jpeg?q=20" alt="Headphone Offers" />
                    </Link>
                </div>

                <div className="deals-banner">
                    <img
                        src="https://m.media-amazon.com/images/G/31/IMG24/Smart_Watches/JAN_ART25/ELP/Most_Awaiting_Deals_Laptops_new._CB553042048_.gif"
                        alt="Most Awaiting Deals"
                    />
                </div>

                <div className="categories">
                    <h1>Discover Our Categories</h1>
                    <p>Shop the latest trends and deals!</p>
                    <div className="categories-list">
                        <div className="category">
                            <h2>Electronics</h2>
                            <p>Find the latest gadgets and tech essentials.</p>
                            <Link to="/electronics">Shop Now</Link>
                        </div>
                        <div className="category">
                            <h2>Fashion</h2>
                            <p>Upgrade your wardrobe with trendy outfits.</p>
                            <Link to="/fashion">Shop Now</Link>
                        </div>
                        <div className="category">
                            <h2>Home Decor</h2>
                            <p>Beautify your home with unique pieces.</p>
                            <Link to="/home-decor">Shop Now</Link>
                        </div>
                    </div>
                </div>

                <div className="newsletter">
                    <h2>Don't Miss Out!</h2>
                    <p>Subscribe to our newsletter and stay updated on the best deals.</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
