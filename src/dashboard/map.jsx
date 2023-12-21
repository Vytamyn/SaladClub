import React from "react";
import "./map.css";
import dashboardMap from "../img/dashboardMap.png";

function Map() {
  const handleClick = () => {
    console.log("Map clicked!");
  };

  return (
    <a href="#" className="dashboard-map" onClick={handleClick}>
      <img src={dashboardMap} alt="Dashboard Map" />
    </a>
  );
}

export default Map;
