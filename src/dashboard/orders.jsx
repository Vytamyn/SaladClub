import React from "react";
import "./orders.css";
import ongoingIcon from "../img/ongoingIcon.png";
import deliveredIcon from "../img/deliveredIcon.png";
import ordersIcon from "../img/ordersIcon.png";
import data from "../assets/data";

function Orders() {
  const ongoingCount = data.filter(
    (order) => order.Status === "In-delivery"
  ).length;
  const deliveredCount = data.filter(
    (order) => order.Status === "Delivered"
  ).length;
  const totalOrdersCount = data.length;

  const displayedData = data.slice(-6);

  return (
    <div className="dashboard-orders">
      <div className="orders-h2">
        <h2>Orders</h2>
      </div>
      <div className="orders-icons">
        <div className="orders-ongoing">
          <img src={ongoingIcon} />
          <div className="dashboard-icon-text">
            <h2>{ongoingCount}</h2>
            <p className="p-gray">Ongoing</p>
          </div>
        </div>
        <div className="orders-ongoing">
          <img src={deliveredIcon} />
          <div className="dashboard-icon-text">
            <h2>{deliveredCount}</h2>
            <p className="p-gray">Delivered</p>
          </div>
        </div>
        <div className="orders-ongoing">
          <img src={ordersIcon} />
          <div className="dashboard-icon-text">
            <h2>{totalOrdersCount}</h2>
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
            {displayedData.map((order, index) => (
              <tr key={index} className="table-row">
                <td className="table-restaurant-body">{order.Restaurant}</td>
                <td className="table-order-body">{order.Order.join(", ")}</td>
                <td className="table-order-id-body">{order.OrderId}</td>
                <td className="table-value-body">{order.Value}</td>
                <td className="table-eta-body">{order.ETA}</td>
                <td className="table-contact-body">{order.Driver}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
