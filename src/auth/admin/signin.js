// import React from "react";
// import { connect } from 'react-redux';
// import {
//   Avatar,
//   Button,
//   IconButton,
//   OutlinedInput,
//   InputLabel,
//   InputAdornment,
//   FormControl,
//   CssBaseline,
//   TextField,
//   FormControlLabel,
//   Checkbox,
//   Grid,
//   Box,
//   Typography,
//   makeStyles,
//   Container
// } from "@material-ui/core";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import clsx from "clsx";
// import { Link } from "react-router-dom";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// // import agent from '../../agent';
// import {
//   UPDATE_FIELD_AUTH,
//   REGISTER,
//   REGISTER_PAGE_UNLOADED
// } from '../../store/actions/actiontypes';


// function Copyright() {
//   return (
//     <Typography
//       variant="body2"
//       color="textSecondary"
//       align="center"
//     >
//       {"Copyright © "}
//       <Link
//         color="inherit"
//         to="/"
//       >
//         KongaDemo
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const useStyles = makeStyles(theme => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1)
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2)
//   }
// }));

// function SignIn(props) {
//   const classes = useStyles();

//   const [adminRegister, setAdminRegister] = React.useState({
//     email: "",
//     password: "",
//     showPassword: false
//   });

//   const handleClickShowPassword = () => {
//     setAdminRegister({
//       ...adminRegister,
//       showPassword: !adminRegister.showPassword
//     });
//   };

//   const handleMouseDownPassword = event => {
//     event.preventDefault();
//   };

//   const inputChangeHandler = (e, inputKey) => {
//     setAdminRegister({
//       ...adminRegister,
//       [e.target.name]: props.onChangeInput(e.target.value, inputKey)
//     });
//   };

//   const submitHandler = (e, email, password) => {
//     e.preventDefault();
//     props.onSubmit(adminRegister);
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Register
//         </Typography>
//         <form 
//         className={classes.form} 
//         onSubmit={submitHandler(adminRegister.email,
//          adminRegister.password)}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             value={adminRegister.email}
//             onChange={inputChangeHandler("email")}
//             autoComplete="email"
//             autoFocus
//           />
//           <FormControl
//             className={clsx(classes.margin, classes.textField)}
//             variant="outlined"
//             fullWidth
//           >
//             <InputLabel htmlFor="outlined-adornment-password">
//               Password
//             </InputLabel>
//             <OutlinedInput
//               id="outlined-adornment-password"
//               type={adminRegister.showPassword ? "text" : "password"}
//               name="password"
//               value={adminRegister.password}
//               onChange={inputChangeHandler("password")}
//               required
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleClickShowPassword}
//                     onMouseDown={handleMouseDownPassword}
//                     className={classes.showPasswordIcon}
//                     edge="end"
//                   >
//                     {adminRegister.showPassword ? (
//                       <Visibility />
//                     ) : (
//                       <VisibilityOff />
//                     )}
//                   </IconButton>
//                 </InputAdornment>
//               }
//               labelWidth={70}
//             />
//           </FormControl>

//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Register
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link to="/admin" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>           
//           </Grid>
//         </form>
//       </div>
//       <Box mt={8}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }


// /* const mapStateToProps = state => ({ ...state.auth.auth });

// const mapDispatchToProps = dispatch => ({
//   onChangeInput: (value,inputKey) =>
//     dispatch({ type: UPDATE_FIELD_AUTH, key: inputKey, value }),
//   onSubmit: (email, password) => {
//     const payload = agent.Auth.login(email, password);
//     dispatch({ type: REGISTER, payload })
//   },
//   onUnload: () =>
//     dispatch({ type: REGISTER_PAGE_UNLOADED })
// }); */

// // export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
// export default SignIn


