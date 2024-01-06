import React from "react";
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
  const defaultProps = {
    center: {
      lat: 48.7206466345901,
      lng: 21.257940366887187,
    },
    zoom: 15,
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
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={mapOptions}
      >
        <CustomMarker lat={48.720865} lng={21.258583} icon={restaurantActive} />
        <CustomMarker lat={48.722364} lng={21.256485} icon={restaurantActive} />
        <CustomMarker
          lat={48.728749}
          lng={21.258297}
          icon={restaurantInactive}
        />
        <CustomMarker lat={48.717124} lng={21.255162} icon={restaurantActive} />
      </GoogleMapReact>
    </div>
  );
}
