import React from "react";
import "./DocbarChannel.css";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function DocbarChannel({ id, channelName, e }) {
  const history = useHistory();
  const [state, dispatch] = useStateValue();

  const cHandler = () => {
    history.push(`/doctor/${state.user.uid}/${e}`);
  };

  return (
    <div onClick={cHandler} className="chan">
      <h6>{channelName}</h6>
    </div>
  );
}

export default DocbarChannel;
