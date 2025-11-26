import React, { useContext, useEffect, useState } from "react";
import "./Crypto.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router";

const Crypto = () => {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const filterCoins = await allCoins.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayCoin(filterCoins);
    setInput("");
  };
  //console.log(allCoins);
  useEffect(() => {
    setDisplayCoin(allCoins);
  }, [allCoins]);
  return (
    <div className="crypto">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          list="coinlist"
          placeholder="Search crypto .."
          value={input}
          onChange={handleInput}
          required
        ></input>
        <datalist id="coinlist">
          {allCoins.map((item, index) => (
            <option key={index} value={item.name} />
          ))}
        </datalist>
        <button type="submit">Search</button>
      </form>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>

          <p style={{ textAlign: "center" }}> 24h</p>
          <p className="volume"> 24h Volume</p>

          <p className="market-cap">Market cap</p>
        </div>
        {displayCoin.slice(0, 70).map((item, index) => (
          <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="" />
              <p>{item.name + "-" + item.symbol}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price}
            </p>

            <p
              className={item.price_change_percentage_24h > 0 ? "green" : "red"}
            >
              {item.price_change_percentage_24h.toFixed(2) + "%"}
            </p>
            <p className="volume">
              {currency.symbol}
              {item.total_volume.toLocaleString()}
            </p>

            <p className="market-cap">
              {currency.symbol} {item.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Crypto;
