import React from "react";
import "./Home.css";
import logo from "../../assets/logo.png";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="text">
          <h1>
            The most reliable & comprehensive <br /> cryptocurrency data for
            traders
          </h1>
          <p>Welcome to world Largest cryptocurrency</p>
        </div>

        <div>
          <img src={logo} />
        </div>
      </div>
      <p>Trusted by Thousands of Industry Builders </p>
      <div className="crypto-names">
        <img src="btc-logo.svg" />
        <img src="ethi-logo.svg" />
        <img src="solana-logo.svg" />
        <img src="tron-logo.svg" />
        <img src="xrp-logo.svg" />
        <img src="doge-logo.svg" style={{ width: "50px" }} />
        <img src="shiba-logo.svg" style={{ width: "50px" }} />
      </div>
    </div>
  );
};

export default Home;
