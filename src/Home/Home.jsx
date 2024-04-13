import React, { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AuthContext } from "../AuthProvider";

function Home() {
  const { routeState } = useContext(AuthContext);
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
      <>This is home</>
    </HelmetProvider>
  );
}

export default Home;
