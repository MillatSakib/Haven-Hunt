import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const CartEstate = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Haven Hunt - Cart</title>
      </Helmet>
      <div>This is /cart_estate</div>
    </HelmetProvider>
  );
};

export default CartEstate;
