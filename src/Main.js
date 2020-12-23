import React, { useState, useEffect } from "react";
import "./Main.css";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles as makesStyles } from "@material-ui/core/styles";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { setDetails, selectUser } from "./features/user/userSlice";
import axios from "./axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const Main = () => {
  const clases = useStyles();
  const user = useSelector(selectUser);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("")
  const [phone,setPhone] =useState("");
  const [address , setAddress] = useState("");
  const dispatch = useDispatch();

  // firstName:String,
  // lastName:String,
  // age:Number,
  // gender:String,
  // phone:Number,
  // Address:String

  const handlesub = (event) => {
    event.preventDefault();

    console.log(user.uid);
    axios.post(`/patient/${user.uid}/profile`, {
      email: email,
      name: name,
    });
    
    dispatch(
      setDetails({
        email: email,
        name: name,
      })
    );
  };

  return (
    <div className="chat">
      <Header />
      <Avatar
        alt="Guneet"
        src="/static/images/avatar/1.jpg"
        className={clases.large}
      />
      <form>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="patient_email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              name="patient_name"
            />
          </Form.Group>

          <Button onClick={handlesub} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </form>
    </div>
  );
};

export default Main;
