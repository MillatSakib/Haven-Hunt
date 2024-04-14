import React, { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AuthContext } from "../AuthProvider";
import SwipeBanner from "./SwipeBanner";
import Estate from "./Estate";
import { useLoaderData } from "react-router-dom";

function Home() {
  const { routeState } = useContext(AuthContext);
  const estateData = useLoaderData();
  console.log(estateData);
  // console.log(routeState);
  // console.log(import.meta.env.VITE_API_KEY);
  // console.log(import.meta.env.VITE_AUTH_DOMAIN);
  // console.log(import.meta.env.VITE_PROJECT_ID);
  // console.log(import.meta.env.VITE_STORAGE_BUCKET);
  // console.log(import.meta.env.VITE_MESSAGING_SENDER_ID);
  // console.log(import.meta.env.VITE_APP_ID);
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
