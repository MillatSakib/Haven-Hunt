import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import NoData from "./NoData";
import AllCards from "./AllCards";

const CartEstate = () => {
  let temp = JSON.parse(localStorage.getItem("cartProperty"));
  return (
    <HelmetProvider>
      <Helmet>
        <title>Haven Hunt - Cart</title>
      </Helmet>
      <div>{temp ? <AllCards></AllCards> : <NoData></NoData>}</div>
    </HelmetProvider>
  );
};

export default CartEstate;
