import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { ToastContainer } from "react-toastify";

const LogoutNav = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <NavLink
        to="/login"
        className={user ? "hidden" : "btn btn-success text-white"}
      >
        Login
      </NavLink>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default LogoutNav;
