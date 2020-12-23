import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectDetails, selectUser } from "./features/user/userSlice";

function Doctors() {
  const details = useSelector(selectDetails);

  return (
    <div>
      <p>{details?.email}</p>
    </div>
  );
}

export default Doctors;
