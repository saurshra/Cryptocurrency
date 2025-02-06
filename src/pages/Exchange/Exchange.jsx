import React, { useEffect, useState } from "react";
import "./Exchange.css";

const Exchange = () => {
  const [exchangeData, setExchangeData] = useState([]);
  const [exchangeInput, setExchangeInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleExchangeInput = (event) => {
    setExchangeInput(event.target.value);
  };

  const handleExchangeSearch = (event) => {
    event.preventDefault();
    const exchangeFilter = exchangeData.filter((item) =>
      item.name.toLowerCase().includes(exchangeInput.toLowerCase())
    );
    setExchangeData(exchangeFilter);
    setExchangeInput("");
  };

  const handleExchangeData = async () => {
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-RXpBmeJeqQB3MhzyeWm66x8V",
      },
    };

    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/exchanges",
        options
      );
      const data = await res.json();
      setExchangeData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleExchangeData();
  }, []);

  if (loading) {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }

  return (
    <div className="exchange">
      <form onSubmit={handleExchangeSearch}>
        <input
          type="text"
          list="exchangelist"
          value={exchangeInput}
          onChange={handleExchangeInput}
          placeholder="Search crypto exchange..."
        />
        <datalist id="exchangelist">
          {exchangeData.map((item, index) => (
            <option key={index} value={item.name} />
          ))}
        </datalist>
        <button type="submit">Search</button>
      </form>
      <div className="exchange-table">
        <div className="echgtable-layout">
          <p>Rank</p>
          <p>Exchange</p>
          <p>Trust Score</p>
          <p>24h Volume (normalized)</p>
          <p className="volume">24h Volume</p>
          <p className="site">Visit Site</p>
        </div>
        {exchangeData.map((item, index) => (
          <div className="echgtable-layout" key={index}>
            <p>{item.trust_score_rank}</p>
            <div>
              <img src={item.image} alt={`${item.name} logo`} />
              <p>{item.name}</p>
            </div>
            <p>{item.trust_score}/10</p>
            <p>
              ${item.trade_volume_24h_btc_normalized?.toLocaleString() || "N/A"}
            </p>
            <p className="volume">
              ${item.trade_volume_24h_btc?.toLocaleString() || "N/A"}
            </p>
            <p className="site">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                Visit {item.name}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exchange;
