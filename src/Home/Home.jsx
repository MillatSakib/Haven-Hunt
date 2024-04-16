import React, { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AuthContext } from "../AuthProvider";
import SwipeBanner from "./SwipeBanner";
import Estate from "./Estate";
import { useLoaderData } from "react-router-dom";

function Home() {
  const { routeState } = useContext(AuthContext);
  const estateData = useLoaderData();

  return (
    <HelmetProvider>
      <Helmet>
        <title>Haven Hunt - Home</title>
      </Helmet>
      <div>
        <SwipeBanner></SwipeBanner>
      </div>

      <div className="my-10 w-[95%] md:w-[90%] lg:w-[80%] lg:max-w-[1250px] mx-auto">
        <Estate estateData={estateData}></Estate>
      </div>
    </HelmetProvider>
  );
}

export default Home;
