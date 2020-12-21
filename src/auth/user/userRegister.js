// import React, { useState } from "react";
// import clsx from "clsx";
// import { connect } from "react-redux";
// import {
//   Paper,
//   TextField,
//   IconButton,
//   OutlinedInput,
//   InputLabel,
//   InputAdornment,
//   FormControl,
//   Button
// } from "@material-ui/core";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import classes from "./register.module.css";
// import { LinkButton } from "../../components/essentials";
// import { LazyLoadImage } from "../../imports";
// import agent from "../../agent";
// import {
//   UPDATE_FIELD_AUTH,
//   REGISTER,
//   REGISTER_PAGE_UNLOADED
// } from "../../store/actions/actiontypes";

// const UserRegister = props => {
//   const [registerForm, setRegisterform] = useState({
//     firstname: "",
//     lastname: "",
//     phonenumber: "",
//     email: "",
//     password: "",
//     showPassword: false,
//     redirectTo: null
//   });

//   const inputChangeHandler = (e, inputValue) => {
//     setRegisterform({
//       ...registerForm,
//       [e.target.name]: props.onChangeInput(e.target.value, inputValue)
//     });
//   };

//   const handleClickShowPassword = () => {
//     setRegisterform({
//       ...registerForm,
//       showPassword: !registerForm.showPassword
//     });
//   };

//   const handleMouseDownPassword = event => {
//     event.preventDefault();
//   };

//   const submitForm = (firstname, lastname, email, password) => e => {
//     e.preventDefault();
//     props.onSubmit(firstname, lastname, email, password);
//   };
//   const SubmitForm = submitForm(
//     registerForm.firstname,
//     registerForm.lastname,
//     registerForm.email,
//     registerForm.password
//   );

//   return (
//     <div>
//       <div className={classes.Register}>
//         <LazyLoadImage
//           publicId="konga/konga_logo_f27l0w.webp"
//           className={classes.logo}
//           height="40"
//           width="128"
//         />
//         <div className={classes.Form}>
//           <Paper elevation={2} className={classes.Paper}>
//             <h1>Create An Account</h1>
//             <hr />
//             <form className={classes.RegisterForm} onSubmit={SubmitForm}>
//               <TextField
//                 label="First Name"
//                 type="text"
//                 name="firstname"
//                 variant="outlined"
//                 onChange={inputChangeHandler("firstname")}
//                 value={registerForm.firstname}
//                 placeholder="Enter First Name"
//                 required
//               />
//               <TextField
//                 label="Last Name"
//                 type="text"
//                 name="lastname"
//                 variant="outlined"
//                 onChange={inputChangeHandler("lastname")}
//                 value={registerForm.lastname}
//                 placeholder="Enter Last Name"
//                 required
//               />
//               <TextField
//                 label="Email Address"
//                 type="email"
//                 name="email"
//                 variant="outlined"
//                 value={registerForm.email}
//                 onChange={inputChangeHandler("email")}
//                 placeholder="Enter Email Address"
//                 required
//               />
//               <TextField
//                 label="Phone Number"
//                 type="number"
//                 name="phonenumber"
//                 variant="outlined"
//                 value={registerForm.phonenumber}
//                 onChange={inputChangeHandler("phonenumber")}
//                 placeholder="Enter Phone Number"
//                 required
//               />
//               <FormControl
//                 className={clsx(classes.margin, classes.textField)}
//                 variant="outlined"
//               >
//                 <InputLabel htmlFor="outlined-adornment-password">
//                   Password
//                 </InputLabel>
//                 <OutlinedInput
//                   id="outlined-adornment-password"
//                   type={registerForm.showPassword ? "text" : "password"}
//                   name="password"
//                   value={registerForm.password}
//                   onChange={inputChangeHandler("password")}
//                   required
//                   endAdornment={
//                     <InputAdornment position="end">
//                       <IconButton
//                         aria-label="toggle password visibility"
//                         onClick={handleClickShowPassword}
//                         onMouseDown={handleMouseDownPassword}
//                         className={classes.showPasswordIcon}
//                         edge="end"
//                       >
//                         {registerForm.showPassword ? (
//                           <Visibility />
//                         ) : (
//                           <VisibilityOff />
//                         )}
//                       </IconButton>
//                     </InputAdornment>
//                   }
//                   labelWidth={70}
//                 />
//               </FormControl>
//               <Button
//                 color="primary"
//                 variant="outlined"
//                 disabled={props.inProgress}
//                 type="submit"
//               >
//                 Create an Account
//               </Button>

//               <p>
//                 By signing up you accept our terms and conditions & privacy
//                 policy
//               </p>
//             </form>
//           </Paper>
//           <Paper className={classes.Login}>
//             <p>Already have an Account?</p>
//             <LinkButton
//               color="secondary"
//               variant="outlined"
//               text="Login"
//               linkto="/account/login"
//             />
//           </Paper>
//         </div>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = state => ({ ...state.auth.auth });

// const mapDispatchToProps = dispatch => ({
//   onChangeInput: (value, inputValue) =>
//     dispatch({ type: UPDATE_FIELD_AUTH, key: inputValue, value }),
//   onSubmit: (firstname, lastname, email, phonenumber, password) => {
//     const payload = agent.Auth.register(
//       firstname,
//       lastname,
//       email,
//       phonenumber,
//       password
//     );
//     dispatch({ type: REGISTER, payload });
//   },
//   onUnload: () => dispatch({ type: REGISTER_PAGE_UNLOADED })
// });

// export default connect(mapStateToProps, mapDispatchToProps)(UserRegister);
