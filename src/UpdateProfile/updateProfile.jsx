import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const UpdateProfile = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Haven Hunt - Update Profile</title>
      </Helmet>
      <div>This is update profile.</div>
    </HelmetProvider>
  );
};

export default UpdateProfile;
