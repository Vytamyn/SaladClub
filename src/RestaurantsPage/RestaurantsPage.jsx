import React from "react";
import "./RestaurantsPage.css";
import "../assets/searchBar.css";
import Sidebar from "../assets/sidebar";
import SearchBar from "../assets/searchBar";
import RestaurantsTabs from "./RestaurantsTabs";

function RestaurantsPage() {
  return (
    <div className="main-frame">
      <Sidebar />
      <div className="restaurant-tabs-container">
        <div className="top-bar">
          <SearchBar />
        </div>
        <RestaurantsTabs />
      </div>
      <div className="restaurants-map">Map Image</div>
    </div>
  );
}

export default RestaurantsPage;
