import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <div>
        <h1>Foodify</h1>
      </div>
      <ul className="navbar-menu">
        <Link to="/" className="nav-hover">
          Home
        </Link>
        <a href="#explore-menu" className="nav-hover">
          Menu
        </a>
        <a href="#app-download" className="nav-hover">
          Mobile-app
        </a>
        <a href="#footer" className="nav-hover">
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img className="icon" src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="cart">
            <img className="icon-basket" src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
