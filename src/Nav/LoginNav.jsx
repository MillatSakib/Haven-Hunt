import React from "react";

const LoginNav = () => {
  const user = {};

  return (
    <div className="flex items-center gap-2">
      <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button">
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={
                  user?.photoURL
                    ? user.photoURL
                    : "https://millatsakib.github.io/Project-Resource/%E2%80%94Pngtree%E2%80%94cartoon%20color%20simple%20male%20avatar_5230557.png"
                }
              />
              {/* <div>{user?.photoURL}</div> */}
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[99] menu p-2 shadow bg-base-100 rounded-box w-max"
        >
          <li className="px-4 py-2">Md. Sohan Millat Sakib</li>
          <li className="px-4 py-2">millatsakib01@gmail.com</li>
        </ul>
      </div>
      <button className="btn btn-error text-white">Logout</button>
    </div>
  );
};

export default LoginNav;
