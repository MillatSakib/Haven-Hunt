import React, { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { AuthContext } from "../AuthProvider";

const UpdateProfile = () => {
  const { updateUserProfile, user } = useContext(AuthContext);
  function handleUpdate(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const imgURL = e.target.imgUrl.value;
    updateUserProfile(name, imgURL);
  }
  return (
    <HelmetProvider>
      <Helmet>
        <title>Haven Hunt - Update Profile</title>
      </Helmet>
      <div className="max-w-[95%] mx-auto border-2 border-blue-400 py-8 px-10 rounded-xl">
        <div>Hey,</div>
        <div>For update your profile please submit this form!</div>
        <div className="font-semibold text-blue-500">
          Note: For Get updated profile please refresh the page after submit the
          form
        </div>
        <div className="card my-8 shrink-0 w-full shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                defaultValue={user.displayName}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                defaultValue={user.email}
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                name="imgUrl"
                type="text"
                placeholder="Image URL"
                className="input input-bordered"
                defaultValue={user.photoURL}
                required
              />
            </div>
            <div className="form-control mt-1">
              <input type="submit" className="btn btn-primary"></input>
            </div>
          </form>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default UpdateProfile;
