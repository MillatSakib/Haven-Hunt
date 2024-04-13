import React, { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AuthContext } from "../AuthProvider";

function Home() {
  const { routeState } = useContext(AuthContext);
  // console.log(routeState);
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
