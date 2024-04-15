import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

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
    </div>
  );
};

export default LogoutNav;
