import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ title, Icon }) => {
  return (
    <div className="sidebarOption">
      {Icon && (
        <div className="sidebarOption__icon">
          <Icon />
        </div>
      )}
      {Icon ? <div>{title}</div> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOption;
