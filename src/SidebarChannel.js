import React from "react";
import "./SidebarChannel.css";

function SidebarChannel({ id, channelName }) {
  
  const cHandler = () => {
    console.log(channelName);
  };

  return (
    <div onClick={cHandler} className="chan">
      <h4>
        <span className="chan__hash">
          #
        </span>
        {channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;
