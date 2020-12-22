import React from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/user/userSlice";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const history = useHistory();

  const logouut = () => {
    dispatch(logout());

    history.push("/");
  };

  return (
    <div className="header">
      <div className="header__left"></div>

      <div className="header__right">
        <p>Hi,{user?.displayName}</p>
        <Button onClick={logouut}>Logout</Button>
      </div>
    </div>
  );
};

export default Header;
