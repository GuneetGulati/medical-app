import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Link } from "react-router-dom";
import { auth as authent} from "./docfirebase";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signupdoc = () => {
  const classes = useStyles();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const history = useHistory();
  const [state, dispatch] = useStateValue();

  const sign = (event) => {
    console.log(username);
    authent
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
          photoURL:"doctor"
        });
      })
      .catch((err) => alert(err.message));
    dispatch({
          type:'SET_DOCTOR',
          userdoc:null
    })
    history.push("/logindoc");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                variant="outlined"
                required
                fullWidth
                type="text"
                id="name"
                label="Name"
                autoFocus
                value={username}
                onChange={(eg) => setusername(eg.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="email"
                id="email"
                label="Email Address"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(eg) => setpassword(eg.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={sign}
          >
            Sign Up
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/logindoc">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Signupdoc;
