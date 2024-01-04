import React from "react";
import "./drivers.css";
import { Link } from "react-router-dom";
import driverData from "../assets/driverData.js";

function Drivers() {
  const displayedDrivers = driverData.slice(0, 3);

  return (
    <div className="dashboard-drivers">
      <div className="dashboard-drivers-header">
        <h2>Drivers</h2>
        <Link to="/drivers" style={{ textDecoration: "none" }}>
          <button className="button-bordered">See all</button>
        </Link>
      </div>
      {displayedDrivers.map((driver, index) => (
        <div className="dashboard-driver-info">
          <div key={index} className="dashboard-driver-image">
            <img src={driver.Image || personPlaceholder} alt={driver.Name} />
          </div>
          <div className="dashboard-drivers-text">
            <p>{driver.Name}</p>
            <p className="p-gray">{`${driver.Status}`}</p>
          </div>
          <div className="dashboard-vehicle-image">
            <img src={driver.Vehicle} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Drivers;
