import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../style/Header.css"; // Importing the CSS file


function Header() {
    return (
        <header className="header-container">
            <nav className="navbar">
                <div className="navbar-content">
                    <Link to="/" className="logo-container">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5nkhcs0lu3r9RU-FyFk-6A766W9ncxCSV0kXCYCHMoT5Bog24lXIjktrWklrDceUkmc&usqp=CAU"
                            className="logo"
                            alt="Logo"
                        />
                    </Link>
                    {/* <div className="auth-buttons">
                        <Link to="login" className="login-btn">
                            Log in
                        </Link>
                        <Link to="register" className="register-btn">
                            Get started
                        </Link>
                    </div> */}
                    <div className="nav-menu" id="mobile-menu-2">
                        <ul className="nav-links">
                            <li>
                                <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
                                    <strong>Home</strong>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/products" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
                                    <strong>Products</strong>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/recommendation" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
                                    <strong>Products for u</strong>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
                                    <strong>About</strong>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
                                    <strong>Contact Us</strong>
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/checkout" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
                                    Checkout
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink to="/feedback" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
                                   <strong> Feedback</strong>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/community" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
                                   <strong> Community</strong>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile" className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}>
                                    <strong>Profile</strong>
                                </NavLink>
                            </li>
                            {/* <li>
                            <button onClick={logout}>Logout</button>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
