import React from "react";
import { NavLink } from "react-router-dom";

const LogoutNav = () => {
  return (
    <NavLink to="/login" className="btn btn-success text-white">
      Login
    </NavLink>
  );
};

export default LogoutNav;
