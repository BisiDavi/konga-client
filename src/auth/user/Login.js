// import React, { useState } from "react";
// import clsx from "clsx";
// import { connect } from 'react-redux';
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import {
//   Paper,
//   TextField,
//   Button,
//   IconButton,
//   OutlinedInput,
//   InputLabel,
//   InputAdornment,
//   FormControl
// } from "@material-ui/core";
// import classes from "./login.module.css";
// import { LinkButton } from "../../components/essentials";
// import { LazyLoadImage } from "../../imports";
// import agent from '../../agent';
// import {
//   UPDATE_FIELD_AUTH,
//   LOGIN,
//   LOGIN_PAGE_UNLOADED
// } from '../../store/actions/actiontypes';


// const UserLogin = props => {
//   const [loginForm, setLoginForm] = useState({
//     email: "",
//     password: "",
//     redirectTo: null,
//     showPassword: false
//   });

//   const handleClickShowPassword = () => {
//     setLoginForm({
//       ...loginForm,
//       showPassword: !loginForm.showPassword
//     });
//   };

//   const handleMouseDownPassword = event => {
//     event.preventDefault();
//   };

//   const InputChangeHandler = (e, inputKey) => {
//     setLoginForm({
//       ...loginForm,
//       [e.target.name]: props.onInputChange(e.target.value, inputKey)
//     })
//   }
  

//   const submitHandler = (email, password) => e => {
//     e.preventDefault();
//     props.onSubmit(email,password)
//   }

//     return (
//       <div className={classes.LoginPage}>
//         <LazyLoadImage
//           publicId="konga/konga_logo_f27l0w.webp"
//           className={classes.logo}
//           height="40"
//           width="128"
//         />
//         <Paper className={classes.Login} elevation={2}>
//           <div className={classes.loginHeader}>
//             <h1>Login</h1>
//           </div>
//           <hr />
//           <form 
//           className={classes.Loginform}
//           onSubmit={submitHandler(loginForm.email,loginForm.password)}
//           >
//             <TextField
//               label="Enter Email Address or Phone Number"
//               type="email"
//               placeholder="Enter Email Address OR Phone Number"
//               variant="outlined"
//               name="email"
//               value={loginForm.email}
//               onChange={InputChangeHandler("email")}
//               required
//             />
//             <FormControl
//               className={clsx(classes.margin, classes.textField)}
//               variant="outlined"
//             >
//               <InputLabel htmlFor="outlined-adornment-password">
//                 Password
//               </InputLabel>
//               <OutlinedInput
//                 id="outlined-adornment-password"
//                 type={loginForm.showPassword ? "text" : "password"}
//                 name="password"
//                 value={loginForm.password}
//                 required
//                 onChange={InputChangeHandler("password")}
//                 endAdornment={
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={handleClickShowPassword}
//                       onMouseDown={handleMouseDownPassword}
//                       className={classes.showPasswordIcon}
//                       edge="end"
//                     >
//                       {loginForm.showPassword ? (
//                         <Visibility />
//                       ) : (
//                         <VisibilityOff />
//                       )}
//                     </IconButton>
//                   </InputAdornment>
//                 }
//                 labelWidth={70}
//               />
//             </FormControl>
//             <Button
//               color="primary"
//               variant="outlined"
//               disabled={props.inProgress}
//               type="submit"
//             >
//               Login
//             </Button>
//           </form>
//         </Paper>
//         <Paper className={classes.CreateAccount}>
//           <p>Don't have an Account?</p>
//           <LinkButton
//             color="secondary"
//             variant="outlined"
//             linkto="/account/register"
//             text="Create an Account"
//           />
//         </Paper>
//       </div>
//     );
// };

// const mapStateToProps = state =>
// ({ ...state.auth.auth });

// const mapDispatchToProps = dispatch => ({
//   onInputChange: (value, inputKey) =>
//     dispatch({ type: UPDATE_FIELD_AUTH, key: inputKey, value }),  
//   onSubmit: (email, password) =>
//     dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) }),
//   onUnload: () =>
//     dispatch({ type: LOGIN_PAGE_UNLOADED })
// });


// export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
