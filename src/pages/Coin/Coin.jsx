import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/BarChart/LineChart";

const Coin = () => {
  const { CoinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [coinChart, setCoinChart] = useState();
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-RXpBmeJeqQB3MhzyeWm66x8V ",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${CoinId}`, options)
      .then((res) => res.json())
      .then((res) => setCoinData(res))
      .catch((err) => console.error(err));
  };

  const fetchCoinChart = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-RXpBmeJeqQB3MhzyeWm66x8V ",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${CoinId}/market_chart?vs_currency=${currency.name}&days=30&interval=daily`,
      options
    )
      .then((res) => res.json())
      .then((res) => setCoinChart(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchCoinChart();
  }, [currency]);

  console.log(coinData);
  console.log(coinChart);

  if (coinData && coinChart) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coinData.image.large} alt="" />
          <p>
            <b>
              {coinData.name}({coinData.symbol.toUpperCase()})
            </b>
          </p>
        </div>
        <div className="chart-info">
          <div className="coin-info">
            <ul>
              <li>Market Rank</li>
              <li>{coinData.market_cap_rank}</li>
            </ul>
            <ul>
              <li>Market Cap</li>
              <li>
                {currency.symbol}
                {coinData.market_data.market_cap[
                  currency.name
                ].toLocaleString()}
              </li>
            </ul>
            <ul>
              <li>Fully Diluted Valuation</li>
              <li>
                {currency.symbol}
                {coinData.market_data.fully_diluted_valuation[
                  currency.name
                ].toLocaleString()}
              </li>
            </ul>
            <ul>
              <li>Current Price</li>
              <li>
                {currency.symbol}
                {coinData.market_data.current_price[
                  currency.name
                ].toLocaleString()}
              </li>
            </ul>

            <ul>
              <li>24H High</li>
              <li>
                {currency.symbol}
                {coinData.market_data.high_24h[currency.name].toLocaleString()}
              </li>
            </ul>
            <ul>
              <li>24H Low </li>
              <li>
                {currency.symbol}
                {coinData.market_data.low_24h[currency.name].toLocaleString()}
              </li>
            </ul>

            <ul>
              <li>Total Supply</li>
              <li>
                {coinData.market_data.total_supply !== null
                  ? coinData.market_data.total_supply.toLocaleString()
                  : "Unlimited"}
              </li>
            </ul>
            <ul>
              <li>Max Supply</li>
              <li>
                {coinData.market_data.max_supply !== null
                  ? coinData.market_data.max_supply.toLocaleString()
                  : "Unlimited"}
              </li>
            </ul>
          </div>
          <div className="coin-chart">
            <LineChart coinChart={coinChart} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;
