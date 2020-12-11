import React,{useState} from "react";
import clsx from "clsx";
import { Redirect } from 'react-router-dom';
import {Modal} from '../../imports';
import axios from 'axios';
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
  // FormHelperText,
  FormControl,
} from "@material-ui/core";
import classes from './modalLogin.module.css'
import { LinkButton } from "../../components/essentials";

const ModalLogin = (props) => {
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

    const inputChangeHandler = (e) => {
      setLoginForm({
        ...loginForm,
        [e.target.name]: e.target.value
      });
    };    

    const onSubmitHandler = e => {
      e.preventDefault();
      console.log(loginForm);     
      
      axios
      .post('/account/login',{
        email: loginForm.email,
        password: loginForm.password
      })
      .then(res => {
        console.log('login response: ')
        console.log(res);
        if(res.status === 200){
          props.updateUser({
            loggedIn: true,
            email: res.data.email
          })
        setLoginForm({
          ...loginForm,
          redirectTo:'/client'
        })
        }
      })
      .catch(error =>{
        console.log('login error:');
        console.log(error);
      })
    };



  if(loginForm.redirectTo){
    return <Redirect to={{ pathname: loginForm.redirectTo }} />
  } else{
      return (
        <Modal 
        handleOpen={props.handleOpen} 
        handleClose={props.handleClose} >
          <div className={classes.Login}>
            <Paper elevation={2}>
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
              <div className={classes.CreateAccount}>
                <p>Don't have an Account?</p>
                <LinkButton
                  color="secondary"
                  variant="outlined"
                  linkto="/account/register"
                  text="Create an Account"
                />
              </div>
            </Paper>
          </div>
        </Modal>
      );
    }
};

export default ModalLogin;
