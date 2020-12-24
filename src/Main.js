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
import { Link } from "react-router-dom";

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
  const user = useSelector(selectUser);
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [check, setCheck] = useState(2);
  const dispatch = useDispatch();

  const patient = async (event) => {
    event.preventDefault();
    await axios.get("/patient").then((res) => {
      res.data.map((resi) => {
        if (resi.id == iid) {
          console.log("first", resi);
            
          setName(resi.name);
          setLastName(resi.lastName);
          setAge(resi.age);
          setGender(resi.gender);
          setPhone(resi.phone);
          setAddress(resi.address);
        }
      });
    });
  };

  useEffect(() => {
    
    
    
  }, []);


  const handlesub = (event) => {
    event.preventDefault();

    console.log(gender);
    axios.post(`/patient/${user.uid}/profile`, {
      name: name,
      lastName: lastName,
      age: age,
      gender: gender,
      phone: phone,
      address: address,
    });

    dispatch(
      setDetails({
        name: name,
        lastName: lastName,
        age: age,
        gender: gender,
        phone: phone,
        address: address,
      })
    );
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
        <Link onClick={patient} className>
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
