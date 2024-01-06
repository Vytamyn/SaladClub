import React from "react";
import { Link } from "react-router-dom";
import "./map.css";
import dashboardMap from "../img/dashboardMap.png";

function Map() {
  const handleClick = () => {};

  return (
    <Link to="/restaurants" className="dashboard-map" onClick={handleClick}>
      <img src={dashboardMap} alt="Dashboard Map" />
    </Link>
  );
}

export default Map;

{/* <script async
src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>  */}

// AIzaSyAdrO2kdQxhOH2znaSK0x-UsKz_dxXG1SI