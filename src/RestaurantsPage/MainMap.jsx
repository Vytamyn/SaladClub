import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import restaurantActive from "../img/restaurant active.png";
import restaurantInactive from "../img/restaurant inactive.png";

const CustomMarker = ({ icon }) => (
  <div>
    <img
      src={icon}
      alt="Marker Icon"
      style={{ width: "48px", height: "48px" }}
    />
  </div>
);

export default function SimpleMap() {
  const [restaurants, setRestaurants] = useState([
    { id: 1, lat: 48.720865, lng: 21.258583, isActive: true },
    { id: 2, lat: 48.722364, lng: 21.256485, isActive: true },
    { id: 3, lat: 48.728749, lng: 21.258297, isActive: false },
    { id: 4, lat: 48.717124, lng: 21.255162, isActive: true },
  ]);

  const handleManageClick = (id) => {
    setRestaurants((prevRestaurants) =>
      prevRestaurants.map((restaurant) =>
        restaurant.id === id
          ? { ...restaurant, isActive: !restaurant.isActive }
          : restaurant
      )
    );
  };

  const mapOptions = {
    styles: [
      {
        featureType: "all",
        elementType: "all",
        stylers: [
          { invert_lightness: "true" },
          { saturation: -100 },
          { lightness: 5 },
        ],
      },
    ],
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAdrO2kdQxhOH2znaSK0x-UsKz_dxXG1SI" }}
        defaultCenter={{ lat: 48.7206466345901, lng: 21.257940366887187 }}
        defaultZoom={15}
        options={mapOptions}
      >
        {restaurants.map((restaurant) => (
          <CustomMarker
            key={restaurant.id}
            lat={restaurant.lat}
            lng={restaurant.lng}
            icon={restaurant.isActive ? restaurantActive : restaurantInactive}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}
