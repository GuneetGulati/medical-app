import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDetails, selectUser } from "./features/user/userSlice";
import Header from "./Header";
import "./Doctors.css";
import Doctor from "./doctor";

function Doctors() {

  return (
    <div className="doctors">
      <Header/>
     <h2 className="dochead">Doctors</h2> 
     <Doctor/>
    </div>
  );

}

export default Doctors;
