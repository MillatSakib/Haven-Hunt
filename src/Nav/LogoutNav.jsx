import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { ToastContainer } from "react-toastify";

const LogoutNav = () => {
  const { user, loading } = useContext(AuthContext);
  return (
    <div>
      <NavLink
        to="/login"
        className={
          user ? "hidden" : loading ? "hidden" : "btn btn-success text-white"
        }
      >
        Login
      </NavLink>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default LogoutNav;
