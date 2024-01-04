import React from "react";
import restaurantsData from "../assets/restaurantsData";
import manageIcon from "../img/manage icon.png";
import phoneIcon from "../img/phone icon.png";
import mailIcon from "../img/mail icon.png";

function RestaurantsTabs() {
  return (
    <div className="restaurant-tabs-container">
      {restaurantsData.map((restaurant, index) => (
        <div className="restaurants-tabs" key={index}>
          <div className="restaurants-tab-image">
            <img src={restaurant.Image} alt={`Image of ${restaurant.Name}`} />
          </div>
          <div className="restaurants-tab-info">
            <h3>{restaurant.Name}</h3>
            <h3>{restaurant.Location}</h3>
            <div className="restaurants-tab-info-open">
              <p className="p-gray">{restaurant.Open}</p>
            </div>
            <div className="restaurants-info-buttons">
              <button
                className="button-black-bordered"
                style={{ marginRight: "8px" }}
              >
                <img
                  src={manageIcon}
                  style={{ marginRight: "8px" }}
                  alt="Manage icon"
                />
                Manage restaurant
              </button>
              <button
                className="button-black-bordered"
                style={{ marginRight: "8px" }}
              >
                <img src={phoneIcon} alt="Phone icon" />
              </button>
              <button
                className="button-black-bordered"
                style={{ marginRight: "8px" }}
              >
                <img src={mailIcon} alt="Mail icon" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RestaurantsTabs;
