import React from "react";
import "./SidebarChannel.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/user/userSlice";

function SidebarChannel({ id, channelName, e }) {
  const history = useHistory();
  const user = useSelector(selectUser);

  const cHandler = () => {
    history.push(`/patient/${user.uid}/${e}`);
  };

  return (
    <div onClick={cHandler} className="chan">
      <h6>{channelName}</h6>
    </div>
  );
}

export default SidebarChannel;
