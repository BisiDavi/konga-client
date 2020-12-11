import React, { useState } from "react";
import clsx from "clsx";
import { Redirect } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
  Paper,
  TextField,
  Button,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl
} from "@material-ui/core";
import classes from "./login.module.css";
import { LinkButton } from "../../components/essentials";
import { LazyLoadImage } from "../../imports";
import { axiosInstance } from "../../utils/client/axiosClient";

const UserLogin = props => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    redirectTo: null,
    showPassword: false
  });

  const handleClickShowPassword = () => {
    setLoginForm({
      ...loginForm,
      showPassword: !loginForm.showPassword
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const inputChangeHandler = e => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(loginForm);

    axiosInstance
      .post("account/login", {
        email: loginForm.email,
        password: loginForm.password
      })
      .then(res => {
        console.log("login response: ");
        console.log(res);
        if (res.status === 200) {
          props.updateUser({
            loggedIn: true,
            email: res.data.email
          });
          setLoginForm({
            ...loginForm,
            redirectTo: "/"
          });
        }
      })
      .catch(error => {
        console.log("login error:");
        console.log(error);
      });
  };

  if (loginForm.redirectTo) {
    return <Redirect to={{ pathname: loginForm.redirectTo }} />;
  } else {
    return (
      <div className={classes.LoginPage}>
        <LazyLoadImage
          publicId="konga/konga_logo_f27l0w.webp"
          className={classes.logo}
          height="40"
          width="128"
        />
        <Paper className={classes.Login} elevation={2}>
          <div className={classes.loginHeader}>
            <h1>Login</h1>
          </div>
          <hr />
          <form className={classes.Loginform}>
            <TextField
              label="Enter Email Address or Phone Number"
              type="email"
              placeholder="Enter Email Address OR Phone Number"
              variant="outlined"
              name="email"
              value={loginForm.email}
              onChange={inputChangeHandler}
              required
            />
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={loginForm.showPassword ? "text" : "password"}
                name="password"
                value={loginForm.password}
                required
                onChange={inputChangeHandler}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      className={classes.showPasswordIcon}
                      edge="end"
                    >
                      {loginForm.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
            <Button
              color="primary"
              variant="outlined"
              onClick={onSubmitHandler}
              type="submit"
            >
              Login
            </Button>
          </form>
        </Paper>
        <Paper className={classes.CreateAccount}>
          <p>Don't have an Account?</p>
          <LinkButton
            color="secondary"
            variant="outlined"
            linkto="/account/register"
            text="Create an Account"
          />
        </Paper>
      </div>
    );
  }
};

export default UserLogin;
