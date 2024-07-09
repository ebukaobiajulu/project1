import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../assets/logo.png";
import lang from "../../assets/LANG.png";
import shopBasket from "../../assets/shopping-basket-01.png";
import heartLogo from "../../assets/heart.png";
import avatar from "../../assets/avatar.png";
import search from "../../assets/search-icon.png";
import HamburgerMenu from "../Hamburger/Hamburger";
import hamburgerMenu from "../../assets/hamburger-menu.png";
import "./header-styles.css";

const Header = () => {
  
  return (
    <div className="header">
      <div className="container">
        <div className="header-flex">
          <div className="logo">
            <Link to={"/"}>
              <img src={mainLogo} alt="" />
            </Link>
          </div>
          <HamburgerMenu />
          <div className="search-bar">
            <input
              type="search"
              name=""
              id=""
              className="search-bar-input"
              placeholder="Search"
            />
            <img src={search} alt="" className="search-icon" />
          </div>
          <div className="header-icons">
            <div className="lang">
              <img src={lang} alt="" />
              <Link to={"/mycart"}>
                <img src={shopBasket} alt="" />
              </Link>
              <img src={heartLogo} alt="" class/>
              <img src={avatar} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
