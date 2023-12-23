import React from "react";
import "./sidebar.css";
import { SidebarData } from "./sidebarData.jsx";
import sclogo from "../img/sclogo.png";
import sendlogo from "../img/sendlogo.png";
import sidebarAvatar from "../img/sidebarAvatar.png";
import threeDots from "../img/3dots.png";

function Sidebar() {
  return (
    <div className="sidebar-full">
      <div className="sidebar-logo">
        <img src={sclogo} />
      </div>
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
                <div className="menu-icon">{val.icon}</div>
                <div className="menu-title">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sidebar-report">
        <p className="p-center">Done for the day?</p>
        <button className="button-green">
          <img
            src={sendlogo}
            alt="Send Logo"
            className="button-icon"
            style={{ marginRight: "8px" }}
          />
          Send daily report
        </button>
      </div>
      <hr />
      <div className="sidebar-avatar">
        <img src={sidebarAvatar} style={{ marginRight: "16px" }} />
        <p style={{ fontWeight: "bold" }}>David Smith</p>
        <img src={threeDots} style={{ marginLeft: "32px" }} />
      </div>
    </div>
  );
}

export default Sidebar;
