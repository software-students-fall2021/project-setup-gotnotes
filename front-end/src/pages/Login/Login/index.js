import React from "react";
import Form from "../../../components/Mobile/Forms";

import Button from "../../../components/Mobile/Button";
import logo from "../../../assets/GotNotes.jpg";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import {useQueryClient, useQuery, useMutation} from 'react-query';
import axios from "axios";

// const getUserData = async (username, userPassword) => {
//   const data = JSON.stringify({
//     "usernameOrEmail": username,
//     "password": userPassword
//   });
  
//   const config = {
//     method: 'post',
//     url: 'localhost:4000/login',
//     headers: { 
//       'Content-Type': 'application/json'
//     },
//     data : data
//   };
  
//   axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// };

// Mutations
// const mutation = useMutation(postUserData, {
//   onSuccess: () => {
//     queryClient.invalidateQueries('userData');
//   },
// });

/*
use state
handle effect
use effect? no

call to server for password and user name
itll return with data
look at data, if it has jwt token, direct to starting page
history.push = direct

2 use state, handle submit, dont put anything in it

regular axios call
*/

export const Login = () => {

  return (
    <div className="whole">
      <img src={logo} className="image" alt="logo" />
      <h2 className="login"> Login</h2>
      <div>
        <text enableBackground="false"> Don't have an account? </text>
        <text>
          <a href="/signup">
            <Button text="Sign up" />{" "}
          </a>
        </text>
      </div>
      <div className="reset">
        <NavLink to="/resetpass">
          <Button text="Reset Password" />
        </NavLink>
      </div>
      <Form placeholder1="Email" placeholder2="Password" />
    </div>
  );
};
