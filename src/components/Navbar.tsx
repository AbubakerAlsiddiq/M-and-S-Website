import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Logo from "../assets/M&S New Logo.jpeg";
import Instagram from "../assets/Instagram-Icon.png";
import Facebook from "../assets/facebook-icon.png";
import './Navbar.css';
import SearchBar from "./SearchBar";

const Navbar = () => {
  const categories = [
    "Balkan Valley",
    "Beans",
    "Biscuits/Cookies",
    "Bread",
    "Cheese",
    "Choclates/Candies",
    "Coffee",
    "Dates",
    "Drinks",
    "Freezer #1",
    "Frozen Vegetables",
    "Grape Leaves",
    "Honey",
    "Jared Foods",
    "Jelly/Jam",
    "Natural Soaps",
    "Meats",
    "M&S Inhouse",
    "Lentils",
    "Mediterranean Sweets and Spreads",
    "Nuts/Seeds",
    "Oils/Butter/Ghee",
    "Olives",
    "Perfume/incense",
    "Pickled Vegetables",
    "Tobacco",
    "Tea",
    "Tahini",
    "Spices",
    "Rice",
    "Yogurt/Yogurt Drinks",
    "Wheat/Grain",
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  href="https://www.facebook.com/DelmarvaMediterraneanMarket/"
                  target="_blank"
                  rel="noopener"
                  className="social-media-links"
                >
                  <img alt="Facebook" src={Facebook} />
                </a>
                <a
                  href="https://www.instagram.com/delmarvamediterraneanmarket/"
                  target="_blank"
                  rel="noopener"
                  className="social-media-links"
                >
                  <img alt="Instagram" src={Instagram} />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active green-link"
                  aria-current="page"
                  href="./components/about"
                >
                  About us
                </a>
              </li>
              <li className="nav-item dropdown green-link">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Inventory
                </a>
                <ul className="dropdown-menu">
                  {categories.map((category) => (
                    <li key={category}>
                      <a
                        className="dropdown-item"
                        href={`/components/Inventory#category-${category}`}
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="NavbarWelcome">
                Welcome to M&S Organics!, A.K.A Delmarva Meditteranean Market
              </li>
            </ul>
            < SearchBar />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
