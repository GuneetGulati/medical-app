import React from "react";
import "./doctor.css";

function Doctor(props) {
  return (
    <div className="card">
      <img src="https://picsum.photos/id/54/400/300" />
      <div className="card-body">
        <h2>{props.name} {props.lastName}</h2>
        <p>Rating </p>
        <p>{props.description}</p>
        <h5>{props.title}</h5>
      </div>
    </div>
  );
}

export default Doctor;
