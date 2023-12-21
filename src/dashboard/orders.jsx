import React from "react";
import "./orders.css";
import ongoingIcon from "../img/ongoingIcon.png";
import deliveredIcon from "../img/deliveredIcon.png";
import ordersIcon from "../img/ordersIcon.png";
import data from "../assets/data";

function Orders() {
  console.log(data);
  return (
    <div className="dashboard-orders">
      <div className="orders-h2">
        <h2>Orders</h2>
      </div>
      <div className="orders-icons">
        <div className="orders-ongoing">
          <img src={ongoingIcon} />
          <div className="dashboard-icon-text">
            <h2>48</h2>
            <p className="p-gray">Ongoing</p>
          </div>
        </div>
        <div className="orders-ongoing">
          <img src={deliveredIcon} />
          <div className="dashboard-icon-text">
            <h2>127</h2>
            <p className="p-gray">Delivered</p>
          </div>
        </div>
        <div className="orders-ongoing">
          <img src={ordersIcon} />
          <div className="dashboard-icon-text">
            <h2>175</h2>
            <p className="p-gray">Orders</p>
          </div>
        </div>
      </div>
      <div>
        <table className="dashboard-table">
          <thead>
            <tr className="table-header">
              <th className="table-restaurant">Restaurant</th>
              <th className="table-order">Order</th>
              <th className="table-order-id">Order ID</th>
              <th className="table-value">Value</th>
              <th className="table-eta">ETA</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td className="table-restaurant-body">Canal St.</td>
              <td className="table-order-body">2xCesar, 1xPasta</td>
              <td className="table-order-id-body">JS7238</td>
              <td className="table-value-body">$38</td>
              <td className="table-eta-body">2:03s</td>
              <td className="table-contact-body">A</td>
            </tr>
            <tr className="table-row">
              <td className="table-restaurant-body">Canal St.</td>
              <td className="table-order-body">2xCesar, 1xPasta</td>
              <td className="table-order-id-body">JS7238</td>
              <td className="table-value-body">$38</td>
              <td className="table-eta-body">2:03s</td>
              <td className="table-contact-body">A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
