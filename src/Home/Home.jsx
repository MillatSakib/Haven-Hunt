import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Home() {
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
