import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import "./hamburger.css"

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger-icon" onClick={toggleMenu}>
        <div className={isOpen ? 'line open' : 'line'}></div>
        <div className={isOpen ? 'line open' : 'line'}></div>
        <div className={isOpen ? 'line open' : 'line'}></div>
      </button>
      {isOpen && (
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>Search</li>
            <li>Wishlist</li>
            <li>My Cart</li>
            <li>Profile</li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default HamburgerMenu;