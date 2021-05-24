import React, { useState } from "react";
import "./Main.css";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles as makesStyles } from "@material-ui/core/styles";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "./axios";
import { Link } from "react-router-dom";
import { useStateValue } from "./Doctor/StateProvider";

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
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));

const Main = ({ iid }) => {
  const clases = useStyles();
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [check, setCheck] = useState(0);
  const [state, dispatch] = useStateValue();

  const patient = async (event) => {
    event.preventDefault();
    await axios.get("/patient").then((resi) => {
      for (var i = 0; i < resi.data.length; i++) {
        if (resi.data[i].id === state.user.uid) {
          console.log("first", resi);

          setName(resi.data[i].name);
          setLastName(resi.data[i].lastName);
          setAge(resi.data[i].age);
          setGender(resi.data[i].gender);
          setPhone(resi.data[i].phone);
          setAddress(resi.data[i].address);
          setCheck(resi.data[i].check);
          break;
        }
        
      };
    });
  };

  const handlesub = (event) => {
    event.preventDefault();

    console.log(gender);
    axios.post(`/patient/${state.user.uid}/profile`, {
      name: name,
      lastName: lastName,
      age: age,
      gender: gender,
      phone: phone,
      address: address,
      check: check,
    });

    dispatch({
      type: "SET_DETAILS",
      details: {
        name: name,
        lastName: lastName,
        age: age,
        gender: gender,
        phone: phone,
        address: address,
      },
    });

    window.location.reload();
  };

  const chng = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="main">
      <Header />
      <h2 className="heading">Edit Profile</h2>
      <div className="mainbod">
        <Avatar
          alt="Guneet"
          src="/static/images/avatar/1.jpg"
          className={clases.large}
        />
        <Link to='/#' onClick={patient} className>
          Access previous details
        </Link>
        <form>
          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First Name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Gender</Form.Label>
              <Form.Control onChange={chng} value={gender} as="select" custom>
                <option>Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />
            </Form.Group>

            <Button onClick={handlesub} variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </form>
      </div>
    </div>
  );
};

export default Main;
