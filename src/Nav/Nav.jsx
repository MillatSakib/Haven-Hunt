import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import LoginNav from "./LoginNav";
import LogoutNav from "./LogoutNav";
import { AuthContext } from "../AuthProvider";

const Nav = () => {
  const { user, setRouteState } = useContext(AuthContext);
  // let logOut, user;
  // console.log(user?.photoURL);
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className="font-semibold"
                  onClick={() => setRouteState("/")}
                >
                  Home
                </NavLink>
              </li>
              <li className={user ? "" : "hidden"}>
                <NavLink
                  to="/update_profile"
                  className="font-semibold"
                  onClick={() => setRouteState("/update_profile")}
                >
                  Update Profile
                </NavLink>
              </li>
              <li className={user ? "" : "hidden"}>
                <NavLink
                  to="/cart_estate"
                  className="font-semibold"
                  onClick={() => setRouteState("/cart_estate")}
                >
                  Cart Estate
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to="/"
            className="btn btn-ghost text-2xl text-blue-500 font-bold"
          >
            <span className="text-red-500">Haven</span>
            <span className="text-blue-400">Hunt</span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            <li>
              <NavLink
                to="/"
                className="font-semibold"
                onClick={() => setRouteState("/")}
              >
                Home
              </NavLink>
            </li>
            <li className={user ? "" : "hidden"}>
              <NavLink
                to="/update_profile"
                className="font-semibold"
                onClick={() => setRouteState("/update_profile")}
              >
                Update Profile
              </NavLink>
            </li>

            <li className={user ? "" : "hidden"}>
              <NavLink
                to="/cart_estate"
                className="font-semibold"
                onClick={() => setRouteState("/cart_estate")}
              >
                Cart Estate
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2 mr-0 md:mr-4">
          <LogoutNav />
          <LoginNav></LoginNav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
