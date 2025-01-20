import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./Assets/Images/Logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

const Navbar = () => {
  const [isMensDropdownVisible, setIsMensDropdownVisible] = useState(false);
  const [isWomensDropdownVisible, setIsWomensDropdownVisible] = useState(false);
  const [isChildDropdownVisible, setIsChildDropdownVisible] = useState(false);

  const handleMensMouseEnter = () => {
    setIsMensDropdownVisible(true);
  };

  const handleMensMouseLeave = () => {
    setIsMensDropdownVisible(false);
  };

  const handleWomensMouseEnter = () => {
    setIsWomensDropdownVisible(true);
  };

  const handleWomensMouseLeave = () => {
    setIsWomensDropdownVisible(false);
  };

  const handleChildMouseEnter = () => {
    setIsChildDropdownVisible(true);
  };

  const handleChildMouseLeave = () => {
    setIsChildDropdownVisible(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Clothing Kart Logo" className="navbar-logo" />
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li
            onMouseEnter={handleMensMouseEnter}
            onMouseLeave={handleMensMouseLeave}
          >
            <Link to="/mens">Mens</Link>
            {isMensDropdownVisible && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/mens/tops">Tops</Link>
                </li>
                <li>
                  <Link to="/mens/bottoms">Bottoms</Link>
                </li>
                <li>
                  <Link to="/mens/accessories">Accessories</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={handleWomensMouseEnter}
            onMouseLeave={handleWomensMouseLeave}
          >
            <Link to="/womens">Womens</Link>
            {isWomensDropdownVisible && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/womens/tops">Tops</Link>
                </li>
                <li>
                  <Link to="/womens/bottoms">Bottoms</Link>
                </li>
                <li>
                  <Link to="/womens/accessories">Accessories</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={handleChildMouseEnter}
            onMouseLeave={handleChildMouseLeave}
          >
            <Link to="/child">Child</Link>
            {isChildDropdownVisible && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/child/tops">Tops</Link>
                </li>
                <li>
                  <Link to="/child/bottoms">Bottoms</Link>
                </li>
                <li>
                  <Link to="/child/accessories">Accessories</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-center">
        <div className="search-container">
          <input
            type="text"
            className="navbar-search"
            placeholder="Search for products, brands and more"
          />
          <i className="fa fa-search search-icon" aria-hidden="true"></i>
        </div>
      </div>
      <div className="navbar-right">
        <Link to="/loginpage" className="navbar-icon">
          <i className="fa-solid fa-user" aria-hidden="true"></i>
        </Link>
        <Link to="/wishlist" className="navbar-icon">
          <i className="fa-solid fa-heart" aria-hidden="true"></i>
        </Link>
        <Link to="/bag" className="navbar-icon">
          <i className="fa-solid fa-bag-shopping" aria-hidden="true"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
