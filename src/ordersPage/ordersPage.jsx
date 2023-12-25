import React from "react";
import "./ordersPage.css";
import Sidebar from "../assets/sidebar";
import SearchBar from "../assets/searchBar";
import "../assets/searchBar.css";
import ongoingIcon from "../img/ongoingIcon.png";
import deliveredIcon from "../img/deliveredIcon.png";
import ordersIcon from "../img/ordersIcon.png";
import data from "../assets/data";

function OrdersPage() {
  return (
    <div className="main-frame">
      <Sidebar />
      <div>
        <div className="top-bar">
          <SearchBar />
          <div className="todays-status">
            <p className="status">Today's status:</p>
            <button className="button-bordered">Export CVS</button>
          </div>
        </div>
        <div className="orders-info"></div>
        <div className="orders-table"></div>
      </div>
    </div>
  );
}

export default OrdersPage;
