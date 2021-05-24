import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { auth } from "./firebase";
import { useStateValue } from "./Doctor/StateProvider";

const Header = () => {
  const history = useHistory();
  const [state, dispatch] = useStateValue();

  const logouut = () => {
    auth.signOut();
    dispatch({
      type: "SET_USER",
      user: null,
    });
    history.push("/");
  };

  return (
    <div className="header">
      <div className="header__left"></div>

      <div className="header__right">
        <p>Hi,{state.user?.displayName}</p>
        <Button onClick={logouut}>Logout</Button>
      </div>
    </div>
  );
};

export default Header;
