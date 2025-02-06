import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

const LineChart = ({ coinChart }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (coinChart.prices) {
      coinChart.prices.map((item) =>
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ])
      );
      setData(dataCopy);
    }
  }, [coinChart]);
  return <Chart chartType="Line" width="100%" height="400px" data={data} />;
};

export default LineChart;
