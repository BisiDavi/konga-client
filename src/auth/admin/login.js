import React from "react";
import {
Avatar,
Button,
CssBaseline,
TextField,
FormControlLabel,
Checkbox,
Paper,
Grid,
Typography,
Box,
IconButton,
OutlinedInput,
InputLabel,
InputAdornment,
FormControl,
makeStyles} from "@material-ui/core";
import clsx from "clsx";
import {Link} from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff"; 
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";


function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {"Copyright © "}
      <Link
        color="inherit"
        to="/"
      >
        KongaDemo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage:
      "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Login() {
  const classes = useStyles();
  const  [adminLogin, setAdminLogin] = React.useState({
    email: '',
    password: '',
    showPassword: false
  })

   const handleClickShowPassword = () => {
     setAdminLogin({
       ...adminLogin,
       showPassword: !adminLogin.showPassword
     });
   };

   const handleMouseDownPassword = event => {
     event.preventDefault();
   };


  const inputChangeHandler = (e) => {
    setAdminLogin({
      ...adminLogin,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log('adminLogin', adminLogin)
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} onSubmit={submitHandler}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              value={adminLogin.email}
              onChange={inputChangeHandler}
              label="Email Address"
              autoFocus
            />
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
              fullWidth
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={adminLogin.showPassword ? "text" : "password"}
                name="password"
                value={adminLogin.password}
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
                      {adminLogin.showPassword ? (
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/admin" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/admin/register" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
