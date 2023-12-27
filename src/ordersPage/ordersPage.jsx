import React from "react";
import "./ordersPage.css";
import Sidebar from "../assets/sidebar";
import SearchBar from "../assets/searchBar";
import "../assets/searchBar.css";
import ongoingIcon from "../img/ongoingIcon.png";
import deliveredIcon from "../img/deliveredIcon.png";
import ordersIcon from "../img/ordersIcon.png";
import data from "../assets/data";
import upChartIcon from "../img/upChartIcon.png";
import downChartIcon from "../img/downChartIcon.png";

function OrdersPage() {
  const ongoingCount = data.filter(
    (order) => order.Status === "In-delivery"
  ).length;
  const deliveredCount = data.filter(
    (order) => order.Status === "Delivered"
  ).length;
  const totalOrdersCount = data.length;

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
        <div className="orders-info">
          <div className="orders-page-ongoing">
            <img src={ongoingIcon} alt="Ongoing delivery icon" />
            <div className="orders-page-icons-text">
              <h2>{ongoingCount}</h2>
              <p className="p-gray">Ongoing</p>
            </div>
          </div>
          <div className="orders-page-delivered">
            <img src={deliveredIcon} alt="Delivered icon" />
            <div className="orders-page-icons-text">
              <h2>{deliveredCount}</h2>
              <p className="p-gray">Delivered</p>
            </div>
          </div>
          <div className="orders-page-orders">
            <img src={ordersIcon} alt="Orders icon" />
            <div className="orders-page-icons-text">
              <h2>{totalOrdersCount}</h2>
              <p className="p-gray">Delivered</p>
            </div>
          </div>
          <div className="orders-page-today">
            <img src={upChartIcon} alt="Sales today chart" />
            <div className="orders-page-icons-text">
              <h2>$5128</h2>
              <p className="p-gray">Sales Today</p>
            </div>
          </div>
          <div className="orders-page-month">
            <img src={downChartIcon} alt="Sales this month chart" />
            <div className="orders-page-icons-text">
              <h2>$28,843</h2>
              <p className="p-gray">Sales Today</p>
            </div>
          </div>
        </div>
        <div className="orders-table">
          <div className="orders-page-table-header">
            <h2>Orders</h2>
          </div>
          <div className="orders-page-table">table</div>
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
