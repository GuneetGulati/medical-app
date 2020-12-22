import React from "react";
import "./Sidebar.css";
import SidebarChannel from "./SidebarChannel";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Dashboard</h3>
      </div>

      <div className="sidebar__channels">
        <SidebarChannel channelName={"Profile"} e={"profile"}/>
        <SidebarChannel channelName={"Doctors"} e={"doctors"}/>
        <SidebarChannel channelName={"Prescriptions"} e={"prescriptions"} />
        <SidebarChannel channelName={"Past Consultations"} e={"past consultations"} />
        <SidebarChannel channelName={"Discussion"} e={"discussion"}  />
      </div>
    </div>
  );
};

export default Sidebar;
