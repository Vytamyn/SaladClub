import { useState } from "react";

import React from "react";
import "./sales.css";
import upChartIcon from "../img/upChartIcon.png";
import downChartIcon from "../img/downChartIcon.png";
import todayGraph from "../img/todayGraph.png";
import monthGraph from "../img/monthGraph.png";
import yearGraph from "../img/yearGraph.png";

function Sales() {
  const [selectedInterval, setSelectedInterval] = useState("today");

  const handleIntervalChange = (event) => {
    setSelectedInterval(event.target.value);
  };

  const getImageForInterval = () => {
    switch (selectedInterval) {
      case "today":
        return todayGraph;
      case "month":
        return monthGraph;
      case "year":
        return yearGraph;
      default:
        return "";
    }
  };

  return (
    <div className="dashboard-sales">
      <div className="sales-left">
        <div className="sales-container">
          <h2>Sales</h2>
          <select
            id="interval"
            name="interval"
            value={selectedInterval}
            onChange={handleIntervalChange}
          >
            <option value="today">Today</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
        <img
          src={getImageForInterval()}
          alt={selectedInterval}
          className="today-graph"
        />
      </div>
      <div className="sales-right">
        <div className="sales-data">
          <img src={upChartIcon} alt="upChartIcon" className="upChartIcon" />
          <div className="sales-text">
            <h2>$ 5128</h2>
            <p className="p-gray">Sales Today</p>
          </div>
        </div>
        <div className="sales-data">
          <img
            src={downChartIcon}
            alt="downChartIcon"
            className="downChartIcon"
          />
          <div className="sales-text">
            <h2>$ 28 843</h2>
            <p className="p-gray">Sales This Month</p>
          </div>
        </div>
        <div className="sales-data">
          <img src={upChartIcon} alt="upChartIcon" className="upChartIcon" />
          <div className="sales-text">
            <h2>$ 268 012</h2>
            <p className="p-gray">Sales This Year</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;
