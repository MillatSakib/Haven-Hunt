import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const LogoutNav = () => {
  const { user } = useContext(AuthContext);
  return (
    <NavLink
      to="/login"
      className={user ? "hidden" : "btn btn-success text-white"}
    >
      Login
    </NavLink>
  );
};

export default LogoutNav;
