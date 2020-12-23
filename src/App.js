import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/user/userSlice";
import {auth} from "./firebase";
import { Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Doctors from "./Doctors"

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
   
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);

        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
        
      } else {
        dispatch(logout());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);


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

          <Route path="/patient/:nme/profile">
            <Sidebar />
            <Main />
          </Route>

          <Route path="/doctors">
            <Doctors />
          </Route>

          <Route path="/" exact>
           
            <Link className="one" to="/login">Login</Link>
            <Link className="two" to="/signup">Signup</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
  }

export default App;
