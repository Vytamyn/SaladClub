import restaurantOne from "../img/restaurant1.png";
import restaurantTwo from "../img/restaurant2.png";
import restaurantThree from "../img/restaurant3.png";
import restaurantFour from "../img/restaurant4.png";
import restaurantActiveIcon from "../img/restaurant icon active.png";
import restaurantInactiveIcon from "../img/restaurant icon inactive.png";

const restaurantsData = [
  {
    id: 1,
    Name: "SaladClub",
    Location: "Hlavná 102, Košice",
    Open: "10:00am - 9:00pm, Mon-Sat",
    Image: restaurantOne,
    ActiveIcon: restaurantActiveIcon,
    InactiveIcon: restaurantInactiveIcon,
    isActive: true,
  },
  {
    id: 2,
    Name: "SaladClub",
    Location: "Hlavná 37/68, Košice",
    Open: "10:00am - 9:00pm, Mon-Sat",
    Image: restaurantTwo,
    ActiveIcon: restaurantActiveIcon,
    InactiveIcon: restaurantInactiveIcon,
    isActive: true,
  },
  {
    id: 3,
    Name: "SaladClub",
    Location: "Masarykova 1667/2, Košice",
    Open: "10:00am - 9:00pm, Mon-Sat",
    Image: restaurantThree,
    ActiveIcon: restaurantActiveIcon,
    InactiveIcon: restaurantInactiveIcon,
    isActive: true,
  },
  {
    id: 4,
    Name: "SaladClub",
    Location: "Murgašova 1, Košice",
    Open: "10:00am - 9:00pm, Mon-Sat",
    Image: restaurantFour,
    ActiveIcon: restaurantActiveIcon,
    InactiveIcon: restaurantInactiveIcon,
    isActive: true,
  },
];

export default restaurantsData;
