import React from "react";
import './nav.css'
const NavBar = () => {
  return (
    <div className="nav">
      <div className="container-nav">
        <ul className="nav-list">
          <li className="nav-list-items">
            <a href="">AirPods</a>
          </li>
          <li className="nav-list-items">
            <a href="">Powerbanks</a>
          </li>
          <li className="nav-list-items">
            <a href="">Phonecase</a>
          </li>
          <li className="nav-list-items">
            <a href="">Chargers</a>
          </li>
          <li className="nav-list-items">
            <a href="">Protective screens</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
