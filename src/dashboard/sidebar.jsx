import React from "react";
import "./sidebar.css";
import { SidebarData } from "./sidebarData.jsx";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {" "}
              <div className="menu-icon">{val.icon}</div>{" "}
              <div className="menu-title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
