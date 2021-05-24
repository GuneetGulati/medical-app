import React from "react";
import "./SidebarChannel.css";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./Doctor/StateProvider";

function SidebarChannel({ id, channelName, e }) {
  const history = useHistory();
  const [state, dispatch] = useStateValue();

  const cHandler = () => {
    history.push(`/patient/${state.user.uid}/${e}`);
  };

  return (
    <div onClick={cHandler} className="chan">
      <h6>{channelName}</h6>
    </div>
  );
}

export default SidebarChannel;
