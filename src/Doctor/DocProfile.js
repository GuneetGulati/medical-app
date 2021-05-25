import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { auth } from "../firebase";
import { useStateValue } from "./StateProvider";

function DocProfile() {
  const history = useHistory();
  const [state, dispatch] = useStateValue();

  const logout = () => {
    auth.signOut();
    dispatch({
      type: "SET_DOCTOR",
      userdoc: null,
    });
    history.push("/");
  };

  return (
    <div>
      <h2>Welcome ,{state.userdoc?.displayName}</h2> 
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}

export default DocProfile;
