import React from "react";
import BlackDashboardIcon from "../img/blackDashboardIcon.png";
import BlackOrdersIcon from "../img/blackOrdersIcon.png";
import BlackRestaurantsIcon from "../img/blackRestaurantsIcon.png";
import BlackProductsIcon from "../img/blackProductsIcon.png";
import BlackDriversIcon from "../img/blackDriversIcon.png";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <img src={BlackDashboardIcon} alt="Dashboard" />,
    link: "/dashboard",
  },
  {
    title: "Orders",
    icon: <img src={BlackOrdersIcon} alt="Orders" />,
    link: "/orders",
  },
  {
    title: "Restaurants",
    icon: <img src={BlackRestaurantsIcon} alt="Restaurants" />,
    link: "/restaurants",
  },
  {
    title: "Products",
    icon: <img src={BlackProductsIcon} alt="Products" />,
    link: "/products",
  },
  {
    title: "Drivers",
    icon: <img src={BlackDriversIcon} alt="Drivers" />,
    link: "/drivers",
  },
];
