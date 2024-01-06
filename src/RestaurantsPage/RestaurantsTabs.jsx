import React, { useState } from "react";
import restaurantsData from "../assets/restaurantsData";
import manageIcon from "../img/manage icon.png";
import phoneIcon from "../img/phone icon.png";
import mailIcon from "../img/mail icon.png";

function RestaurantsTabs() {
  const [restaurants, setRestaurants] = useState(restaurantsData);

  const handleManageClick = (index) => {
    const updatedRestaurants = [...restaurants];
    updatedRestaurants[index].isActive = !updatedRestaurants[index].isActive;
    setRestaurants(updatedRestaurants);
  };

  return (
    <div className="restaurant-tabs-container">
      {restaurants.map((restaurant, index) => (
        <div className="restaurants-tabs" key={restaurant.id}>
          <div className="restaurants-tab-image">
            <img src={restaurant.Image} alt={`Image of ${restaurant.Name}`} />
          </div>
          <div className="restaurants-tab-info">
            <div className="restaurants-tab-header">
              <h3>{restaurant.Name}</h3>
              <img
                src={
                  restaurant.isActive
                    ? restaurant.ActiveIcon
                    : restaurant.InactiveIcon
                }
              />
            </div>
            <h3>{restaurant.Location}</h3>
            <div className="restaurants-tab-info-open">
              <p className="p-gray">{restaurant.Open}</p>
            </div>
            <div className="restaurants-info-buttons">
              <button
                className="button-black-bordered"
                style={{ marginRight: "8px" }}
                onClick={() => handleManageClick(index)}
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
                <a href="tel:+1234567890">
                  <img src={phoneIcon} alt="Phone icon" />
                </a>
              </button>
              <button
                className="button-black-bordered"
                style={{ marginRight: "8px" }}
              >
                <a href="mailto:example@saladclub.com">
                  <img src={mailIcon} alt="Mail icon" />
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RestaurantsTabs;
