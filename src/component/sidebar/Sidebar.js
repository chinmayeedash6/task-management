import React from "react";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li className="row"
              key={key}
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            > 
              <div className="icon">{val.icon}</div>
              <div className="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
