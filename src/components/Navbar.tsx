import React, { useState, useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/M_S_new_logo.png";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faShoppingBag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearchClick = useCallback(() => {
    setShowSearchForm((prev) => !prev);
  }, []);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={Logo} alt="Logo" className="navbar-logo" />
        <NavLink to="/" className="navbar-brand">
          <span>Delmarva</span>
          <span>Mediterranean</span>
          <span>Market</span>
        </NavLink>
      </div>
      <div className={`navbar-menu ${isMenuOpen ? "open" : "close"}`}>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/Inventory" className="nav-link">
          Inventory
        </NavLink>
        <NavLink to="/" className="nav-link">
          Reviews
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About us
        </NavLink>
      </div>
      <div className="navbar-icons">
        <button
          className="menu-btn"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <button
          className="search-btn"
          onClick={handleSearchClick}
          aria-label="Search"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button className="cart-btn" aria-label="Shopping cart">
          <FontAwesomeIcon icon={faShoppingBag} />
        </button>
        <button className="user-btn" aria-label="User profile">
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
      <div className={`search-form ${showSearchForm ? "show" : "hide"}`}>
        <input
          type="search"
          id="search-box"
          placeholder="Search Inventory..."
        />
        <label htmlFor="search-box">
          <FontAwesomeIcon icon={faSearch} />
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
