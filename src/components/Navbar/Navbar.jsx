import React, { useContext, useState } from "react";
import "./Navbar.css";
import { FaLightbulb, FaMoon, FaSun } from "react-icons/fa6";
import logo from "../../assets/logo.png";
// import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [theme, setTheme] = useState("default");
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleCurrency = (event) => {
    switch (event.target.value) {
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "aud": {
        setCurrency({ name: "aud", symbol: "A$" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
      }
    }
  };

  const handleTheme = () => {
    if (theme === "default") {
      setTheme("light");
      document.body.classList.add("light-theme"); // Add light theme
    }
    if (theme === "light") {
      setTheme("default");
      document.body.classList.remove("light-theme"); // Remove light theme if present
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="" className="logo" />
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
          <li>Cryptocurrencies </li>
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
