import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import { auth } from "./firebase";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Doctors from "./Doctors";
import LoginDoc from "./Doctor/Logindoc";
import SignUpDoc from "./Doctor/Signupdoc";
import { useStateValue } from "./Doctor/StateProvider";
import DocProfile from "./Doctor/DocProfile";
import { auth as authen } from "./firebase";
import Docbar from "./Doctor/Sidebar/Docbar";

const App = () => {
  const [iid, setiid] = useState("");
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      
        console.log(authUser);
        console.log(authUser.photoURL);
        setiid(authUser.uid);
        if (authUser.photoURL === "patient") {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });

        dispatch({
          type: "SET_DOCTOR",
          user: null,
        });
      }

      if (authUser.photoURL === "doctor") {
        dispatch({
          type: "SET_DOCTOR",
          userdoc: authUser,
        });
      
        dispatch({
          type: "SET_USER",
          user: null,
        });
      } 
      
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/logindoc">
            <LoginDoc />
          </Route>

          <Route path="/signupdoc">
            <SignUpDoc />
          </Route>

          <Route path="/doctor/:nme/profile">
            <Docbar />
            <DocProfile />
          </Route>

          <Route path="/patient/:nme/profile">
            <Sidebar />
            <Main iid={iid} />
          </Route>

          <Route path="/patient/:nme/doctors">
            <Sidebar />
            <Doctors />
          </Route>

          <Route path="/" exact>
            <h3>For Patient</h3>
            <Link className="one" to="/login">
              Login
            </Link>
            <Link className="two" to="/signup">
              Signup
            </Link>

            <h3>For Doctors</h3>
            <Link className="one" to="/logindoc">
              Login
            </Link>
            <Link className="two" to="/signupdoc">
              Signup
            </Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
