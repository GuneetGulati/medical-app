import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { auth } from "../firebase";
import { useStateValue } from "./StateProvider";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Form from "react-bootstrap/Form";
import axios from "../axios";
import { Link } from "react-router-dom";
import "../Main.css";

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

function DocProfile() {
  const history = useHistory();
  const [state, dispatch] = useStateValue();
  const clases = useStyles();
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [check, setCheck] = useState(0);
  const [title, setTitle] = useState("");
  const [specone, setSpecone] = useState("");
  const [desc, setDesc] = useState("");
  const [loc, setLoc] = useState("");

  const doctor = async (event) => {
    event.preventDefault();
    await axios.get("/doctor").then((resi) => {
      for (var i = 0; i < resi.data.length; i++) {
        if (resi.data[i].id === state.userdoc.uid) {
          console.log("first", resi);
          setTitle(resi.data[i].title);
          setName(resi.data[i].name);
          setLastName(resi.data[i].lastName);
          setAge(resi.data[i].age);
          setGender(resi.data[i].gender);
          setPhone(resi.data[i].phone);
          setAddress(resi.data[i].address);
          setCheck(resi.data[i].check);
          setSpecone(resi.data[i].specone);
          setLoc(resi.data[i].location);
          setDesc(resi.data[i].description);
          break;
        }
      }
    });
  };

  const handlesub = (event) => {
    event.preventDefault();

    console.log(gender);
    axios.post(`/doctor/${state.userdoc.uid}/profile`, {
      title: title,
      name: name,
      lastName: lastName,
      age: age,
      gender: gender,
      phone: phone,
      address: address,
      check: check,
      specone: specone,
      description: desc,
      location: loc,
    });

    dispatch({
      type: "SET_DOCTOR_DETAILS",
      details: {
        title: title,
        name: name,
        lastName: lastName,
        age: age,
        gender: gender,
        phone: phone,
        address: address,
        specone: specone,
        description: desc,
        location: loc,
      },
    });

    window.location.reload();
  };

  const chng = (event) => {
    setGender(event.target.value);
  };

  const logout = () => {
    auth.signOut();
    dispatch({
      type: "SET_DOCTOR",
      userdoc: null,
    });
    history.push("/");
  };

  return (
    <div className="main">
      <h2>Welcome ,{state.userdoc?.displayName}</h2>
      <Button onClick={logout}>Logout</Button>

      <h2 className="heading">Edit Profile</h2>
      <div className="mainbod">
        <Avatar
          alt="Guneet"
          src="/static/images/avatar/1.jpg"
          className={clases.large}
        />
        <Link to="/#" onClick={doctor} className>
          Access previous details
        </Link>
        <form>
          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
            </Form.Group>

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
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Description"
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

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Speciality </Form.Label>
              <Form.Control
                type="text"
                value={specone}
                onChange={(e) => setSpecone(e.target.value)}
                placeholder="Speciality "
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

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={loc}
                onChange={(e) => setLoc(e.target.value)}
                placeholder="Location"
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
}

export default DocProfile;
