import React, { useState } from "react";
import { Link } from "react-router";
import { FaLightbulb } from "react-icons/fa";
import logo from "../../assets/logo.png"; // Adjust the logo import as needed
import "./Navbar.css";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleTheme = (theme) => {
    console.log(`Theme set to: ${theme}`);
    // Add your theme change logic here
  };

  const handleCurrency = (e) => {
    console.log(`Currency selected: ${e.target.value}`);
    // Add your currency selection logic here
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <div
        className={`hamburger ${isMenuActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="hamburger-container">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      <ul className={`nav-links ${isMenuActive ? "open" : ""}`}>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"cryptocurrencies"}>
          <li>Cryptocurrencies</li>
        </Link>
        <Link to={"exchanges"}>
          <li>Exchanges</li>
        </Link>
        <li>NFT</li>
        <Link to={"learn"}>
          <li>Learn</li>
        </Link>
      </ul>

      <div className="nav-right">
        <select onChange={handleCurrency}>
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="eur">EURO</option>
          <option value="aud">AUD</option>
        </select>

        <div className="custom-dropdown">
          <ul className="dropdown-menu">
            <li onClick={() => handleTheme("light")}>
              <FaLightbulb />
            </li>
          </ul>
        </div>
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
