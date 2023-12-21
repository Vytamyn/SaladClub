import personOne from "../img/personOne.png";
import personTwo from "../img/personTwo.png";
import personThree from "../img/personThree.png";
import personFour from "../img/personFour.png";
import personPlaceholder from "../img/personPlaceholder.png";
import vehicleOne from "../img/vehicleOne.png";
import vehicleOneIdle from "../img/vehicleOneIdle.png";
import vehicleTwo from "../img/vehicleTwo.png";

const driverData = [
  {
    Name: "Oliver James",
    Status: "Delivered",
    CurrentDeliveryID: "HU0234",
    VehicleID: "NY 74129",
    Image: personOne,
    Vehicle: vehicleOne,
  },
  {
    Name: "Hazel Rose",
    Status: "In-delivery",
    CurrentDeliveryID: "OW9030",
    VehicleID: "NY 29071",
    Image: personTwo,
    Vehicle: vehicleOne,
  },
  {
    Name: "Trevor Mason",
    Status: "Idle",
    CurrentDeliveryID: "GM9301",
    VehicleID: "NY 02349",
    Image: personThree,
    Vehicle: vehicleOneIdle,
  },
  {
    Name: "David Smith",
    Status: "In-delivery",
    CurrentDeliveryID: "TL3459",
    VehicleID: "NY 39082",
    Image: personFour,
    Vehicle: vehicleTwo,
  },
];

export default driverData;
