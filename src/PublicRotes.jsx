import React from "react";
import NotFoundPage from "./ErroPage/NotFound.jsx";
import { createBrowserRouter } from "react-router-dom";
import Tamplate from "./Tamplate.jsx";
import Home from "./Home/Home.jsx";
import UpdateProfile from "./UpdateProfile/updateProfile.jsx";
import CartEstate from "./CartEstate/CartEstate.jsx";

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
          element: <UpdateProfile></UpdateProfile>,
        },
        {
          path: "//cart_estate",
          element: <CartEstate></CartEstate>,
        },
      ],
    },
  ]);
  return routes;
};

export default PublicRotes;
