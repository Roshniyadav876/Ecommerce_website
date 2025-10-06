import React from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

function Navbar({ searchTerm, setSearchTerm, handleShopNow }) {
  return (
    <header className="navbar">
      <div className="logo">Fashionista</div>

      <ul className="nav_links">
        <li onClick={() => window.scrollTo(0, 0)}>Home</li>
        <li onClick={handleShopNow}>Shop</li>
        <li>Women</li>
        <li>Men</li>
        <li>Contact</li>
      </ul>

      <div className="nav_icons">
        <div className="search_box">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="icon" />
        </div>
        <GiShoppingCart className="icon" size={50} color="white"/>
      </div>
    </header>
  );
}

export default Navbar;
