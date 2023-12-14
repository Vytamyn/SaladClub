import React from "react";
import "./sales.css";
import upChartIcon from "../img/upChartIcon.png";
import downChartIcon from "../img/downChartIcon.png";
import todayGraph from "../img/todayGraph.png";
import monthGraph from "../img/monthGraph.png";
import yearGraph from "../img/yearGraph.png";

function Sales() {
  return (
    <div className="dashboard-sales">
      <div className="sales-left">
        <div className="sales-container">
          <h2>Sales</h2>
          <select id="interval" name="interval">
            <option value="today">Today</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
        <img src={todayGraph} alt="todayGraph" className="today-graph" />
      </div>
      <div className="sales-right">
        <img src={upChartIcon} alt="upChartIcon" className="upChartIcon" />
        <img
          src={downChartIcon}
          alt="downChartIcon"
          className="downChartIcon"
        />
        <img src={upChartIcon} alt="upChartIcon" className="upChartIcon" />
      </div>
    </div>
  );
}

export default Sales;

// <img
// src={sendlogo}
// alt="Send Logo"
// className="button-icon"
// style={{ marginRight: "8px" }}
// />
