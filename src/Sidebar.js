import React from "react";
import "./Sidebar.css";
import SidebarChannel from "./SidebarChannel";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>Dashboard</h5>
      </div>

      <div className="sidebar__channels">
        <SidebarChannel channelName={"Profile"} e={"profile"}/>
        <SidebarChannel channelName={"Doctors"} e={"doctors"}/>
        <SidebarChannel channelName={"Prescriptions"} e={"prescriptions"} />
        <SidebarChannel channelName={"Video Conference"} e={"meeting"} />
        <SidebarChannel channelName={"Discussion"} e={"discussion"}  />
      </div>

    </div>
  );
};

export default Sidebar;
