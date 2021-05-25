import React, { useState, useEffect } from "react";
import "./publicprofile.css";
import axios from "./axios";
import { useStateValue } from "./Doctor/StateProvider";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Button from "@material-ui/core/Button";

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

function PublicProfile(props) {
  const [resi, setResi] = useState({});
  const [state, dispatch] = useStateValue();
  const clases = useStyles();

  useEffect(() => {
    const getData = async () => {
      axios.get("/doctor").then((resi) => {
        for (var i = 0; i < resi.data.length; i++) {
          if (resi.data[i].id === state.currclick) {
            setResi(resi.data[i]);
            break;
          }
        }
      });
    };
    getData();
  }, []);

  return (
    <div>
      <Header />
      <div className="full">
        <div className="sec">
          <Avatar
            alt="Guneet"
            src="/static/images/avatar/1.jpg"
            className={clases.large}
          />
          <br />
          <br />
          <br />
          <Button ><div className="but">CONSULT Dr.{resi.name}</div></Button>
        </div>
        <div className="sec">
          {console.log(resi)}
          <h2>
            {resi.name} {resi.lastName}
          </h2>
          <br />
          <h6 className="hd">TITLE</h6>
          <h4>{resi.title}</h4>
          <br />
          <h6 className="hd">SPECIALIALITY</h6>
          <h4>{resi.specone}</h4>
          <br />
          <h6 className="hd">LOCATION</h6>
          <h4>{resi.location}</h4>
          <br />
          <br />
          <h6 className="hd">DESCRIPTION</h6>
          <h4>{resi.description}</h4>
        </div>
      </div>
    </div>
  );
}

export default PublicProfile;
