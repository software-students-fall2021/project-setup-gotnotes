import React, { useContext } from "react";
//ctx
import { GlobalContext } from "../context/provider";

//components
import { Login } from "../pages/Login/Login";
import { SignUp } from "../pages/Login/SignUp";

export const WithAuth = (props) => {
  const { user } = useContext(GlobalContext);
  if (user) return <>{props.children}</>;
  return <Login />;
};

export const WithAdminAuth = (props) => {
  const { user, isAdmin } = useContext(GlobalContext);
  if (user && isAdmin) return <>{props.children}</>;
  if (user && !isAdmin) return <>{props.children}</>;
  return <Login />;
};
