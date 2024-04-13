import React from "react";
import NotFoundPage from "./ErroPage/NotFound.jsx";
import { createBrowserRouter } from "react-router-dom";
import Tamplate from "./Tamplate.jsx";
import Home from "./Home/Home.jsx";
import UpdateProfile from "./UpdateProfile/updateProfile.jsx";
import CartEstate from "./CartEstate/CartEstate.jsx";
import Login from "./Auth/Login.jsx";
import Register from "./Auth/Register.jsx";
import PrivateRoutes from "./PrivateRoutes/MainPrivateRoutes.jsx";

const PublicRotes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Tamplate></Tamplate>,
      errorElement: <NotFoundPage></NotFoundPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/update_profile",
          element: (
            <PrivateRoutes>
              <UpdateProfile></UpdateProfile>
            </PrivateRoutes>
          ),
        },
        {
          path: "/cart_estate",
          element: (
            <PrivateRoutes>
              <CartEstate></CartEstate>
            </PrivateRoutes>
          ),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
  ]);
  return routes;
};

export default PublicRotes;
