import React from "react";
import "./doctor.css";

function doctor() {
  return (
    <div className="card">
      <img src="https://picsum.photos/id/54/400/300" />
      <div className="card-body">
        <h2>Dr. Elson</h2>
        <p>Rating </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <h5>Cardiologist</h5>
      </div>
    </div>
  );
}

export default doctor;
