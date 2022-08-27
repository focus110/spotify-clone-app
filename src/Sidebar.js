import React from "react";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="sidebar__logo_" src="" alt="logo" />
      <SidebarOption title="Home" />
      <SidebarOption title="Search" />
      <SidebarOption title="Library" />
    </div>
  );
};

export default Sidebar;
