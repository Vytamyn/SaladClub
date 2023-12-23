import React from "react";
import Sidebar from "../assets/sidebar";
import "./dashboard.css";
import Search from "./search";
import Sales from "./sales";
import Orders from "./orders";
import CurrentOffer from "./currentOffer";
import Drivers from "./drivers";
import Map from "./map";

function Dashboard() {
  return (
    <div className="main-frame">
      <Sidebar />
      <div className="secondary-frame">
        <div className="main-search">
          <Search />
        </div>
        <div className="dashboard-info">
          <div className="left-side">
            <Sales />
            <Orders />
          </div>
          <div className="right-side">
            <CurrentOffer />
            <Drivers />
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
