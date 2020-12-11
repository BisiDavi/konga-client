import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import clsx from "clsx";
import {
  Paper,
  TextField,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  Button
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import classes from "./register.module.css";
import { LinkButton } from "../../components/essentials";
import { LazyLoadImage } from "../../imports";
import { axiosInstance } from "../../utils/client/axiosClient";

const UserRegister = () => {
  const [registerForm, setRegisterform] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    password: "",
    showPassword: false,
    redirectTo: null
  });

  const inputChangeHandler = e => {
    setRegisterform({
      ...registerForm,
      [e.target.name]: e.target.value
    });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(registerForm);

    axiosInstance
      .post("account/register", {
        firstname: registerForm.firstname,
        lastname: registerForm.lastname,
        email: registerForm.email,
        phonenumber: registerForm.phonenumber,
        password: registerForm.password
      })
      .then(res => {
        console.log(res);
        if (!res.data.errmsg) {
          console.log("successful signup");
          setRegisterform({
            ...registerForm,
            redirectTo: "/acount/login"
          });
        } else {
          console.log("a user exist with your email");
        }
      })
      .catch(error => {
        console.log("signup error: ");
        console.log(error);
      });
  };

  const handleClickShowPassword = () => {
    setRegisterform({
      ...registerForm,
      showPassword: !registerForm.showPassword
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  if (registerForm.redirectTo) {
    return <Redirect to={{ pathname: registerForm.redirectTo }} />;
  } else {
    return (
      <div>
        <div className={classes.Register}>
          <LazyLoadImage
            publicId="konga/konga_logo_f27l0w.webp"
            className={classes.logo}
            height="40"
            width="128"
          />
          <div className={classes.Form}>
            <Paper elevation={2} className={classes.Paper}>
              <h1>Create An Account</h1>
              <hr />
              <form className={classes.RegisterForm} onSubmit={onSubmitHandler}>
                <TextField
                  label="First Name"
                  type="text"
                  name="firstname"
                  variant="outlined"
                  onChange={inputChangeHandler}
                  value={registerForm.firstname}
                  placeholder="Enter First Name"
                  required
                />
                <TextField
                  label="Last Name"
                  type="text"
                  name="lastname"
                  variant="outlined"
                  onChange={inputChangeHandler}
                  value={registerForm.lastname}
                  placeholder="Enter Last Name"
                  required
                />
                <TextField
                  label="Email Address"
                  type="email"
                  name="email"
                  variant="outlined"
                  value={registerForm.email}
                  onChange={inputChangeHandler}
                  placeholder="Enter Email Address"
                  required
                />
                <TextField
                  label="Phone Number"
                  type="number"
                  name="phonenumber"
                  variant="outlined"
                  value={registerForm.phonenumber}
                  onChange={inputChangeHandler}
                  placeholder="Enter Phone Number"
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
                    type={registerForm.showPassword ? "text" : "password"}
                    name="password"
                    value={registerForm.password}
                    onChange={inputChangeHandler}
                    required
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          className={classes.showPasswordIcon}
                          edge="end"
                        >
                          {registerForm.showPassword ? (
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
                <Button color="primary" variant="outlined" type="submit">
                  Create an Account
                </Button>

                <p>
                  By signing up you accept our terms and conditions & privacy
                  policy
                </p>
              </form>
            </Paper>
            <Paper className={classes.Login}>
              <p>Already have an Account?</p>
              <LinkButton
                color="secondary"
                variant="outlined"
                text="Login"
                linkto="/account/login"
              />
            </Paper>
          </div>
        </div>
      </div>
    );
  }
};

export default UserRegister;
