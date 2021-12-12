import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

//ctx
import { GlobalContext } from "../context/provider";

//components
import { Login } from "../pages/Login/Login";
import { SignUp } from "../pages/Login/SignUp";

export const WithAuth = (props) => {
  const {
    globalState: { currentUser },
  } = useContext(GlobalContext);
  if (currentUser) return <>{props.children}</>;
  return <Login />;
};

export const WithAdminAuth = (props) => {
  const {
    globalState: { currentUser, isAdmin },
    set_error,
  } = useContext(GlobalContext);
  const history = useHistory();

  console.log(isAdmin);

  if (currentUser && isAdmin) return <>{props.children}</>;
  if (currentUser && !isAdmin) {
    set_error("You need admin privilages for this page");
    history.push("/");
    return null;
  }
  return <Login />;
};
