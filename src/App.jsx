import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import Crypto from "./pages/Crypto/Crypto";
import Footer from "./components/Footer/Footer";
import Exchange from "./pages/Exchange/Exchange";
import Learn from "./pages/Learn/Learn";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="perfect">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cryptocurrencies" element={<Crypto />} />
          <Route path="/Coin/:CoinId" element={<Coin />} />
          <Route path="exchanges" element={<Exchange />} />
          <Route path="learn" element={<Learn />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
