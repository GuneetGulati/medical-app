import React from "react";
import "./Docbar.css";
import DocbarChannel from "./DocbarChannel";

const Docbar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>Dashboard</h5>
      </div>

      <div className="sidebar__channels">
        <DocbarChannel channelName={"Profile"} e={"profile"}/>
        <DocbarChannel channelName={"Attended Patients"} e={"attended"}/>
        <DocbarChannel channelName={"Pending Patients"} e={"pending"} />
        <DocbarChannel channelName={"Video Conference"} e={"meeting"} />
        <DocbarChannel channelName={"Discussion"} e={"discussion"}  />
      </div>
    </div>
  );
};

export default Docbar;
