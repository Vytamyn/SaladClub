import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/dashboard.jsx";
import Login from "./login/Login.jsx";
import OrdersPage from "./ordersPage/ordersPage.jsx";
import RestaurantsPage from "./RestaurantsPage/RestaurantsPage.jsx";
import ProductsPage from "./ProductsPage/ProductsPage.jsx";
import DriversPage from "./DriversPage/DriversPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/drivers" element={<DriversPage />} />
      </Routes>
    </Router>
  );
}

export default App;
