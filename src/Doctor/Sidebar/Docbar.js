import React from "react";
import "./Docbar.css";
import DocbarChannel from "./DocbarChannel";
import { useStateValue } from "../StateProvider";

const Docbar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>Dashboard</h5>
      </div>

      <div className="sidebar__channels">
        <DocbarChannel channelName={"Profile"} e={"profile"}/>
        <DocbarChannel channelName={"Doctors"} e={"doctors"}/>
        <DocbarChannel channelName={"Prescriptions"} e={"prescriptions"} />
        <DocbarChannel channelName={"Past Consultations"} e={"past consultations"} />
        <DocbarChannel channelName={"Discussion"} e={"discussion"}  />
      </div>
    </div>
  );
};

export default Docbar;
