import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [passError, setPassError] = useState("");
  const logInUser = {};
  const GoogleSignIn = {};
  const githubSignIn = {};
  const tweeterLogin = {};
  //  const { logInUser, GoogleSignIn, user, user, tweeterLogin } = useContext(AuthContext);
  // const location = useLocation();
  // console.log(location);
  // const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    if (!/[A-Z]/.test(password)) {
      // console.log("There have at least one uppercase!");
      setPassError("There have at least one uppercase!");

      return;
    }
    if (!/[a-z]/.test(password)) {
      // console.log("There have at least one lowercase!");
      setPassError("There have at least one lowercase!");
      return;
    }
    if (!/.*\d{2,}$/.test(password)) {
      // console.log("There have at least two digit at last");
      setPassError("There have at least two digit at last");
      return;
    }
    setPassError("");
    logInUser(email, password);
    //       .then((result) => {
    //         console.log(result);
    //         e.target.reset();
    //         navigate("/");
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
  };
  // useEffect(() => {
  //   if (user) {
  //     navigate(location.state);
  //   }
  // }, [user]);
  return (
    <HelmetProvider>
      <Helmet>
        <title>F-Auth - Login</title>
      </Helmet>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content w-[95%] md:w-[70%] lg:w-[50%] xl:w-[35] 2xl:w-[30%] flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card shrink-0 w-full shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                  <div
                    className={
                      passError ? "text-red-500 text-xs ml-1 mt-2" : "hidden"
                    }
                  >
                    {passError}
                  </div>

                  <button
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                  >
                    <label className="label text-red-500 font-bold hover:cursor-pointer hover:underline mt-1 active:text-red-700">
                      Forgot password?
                    </label>
                  </button>
                  <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                      <h3 className="font-bold text-lg">
                        Input your Email Here!
                      </h3>
                      <p className="mt-4 flex items-center gap-3">
                        <label className="input input-bordered flex items-center gap-2 w-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 opacity-70"
                          >
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                          </svg>
                          <input
                            type="text"
                            className="grow"
                            placeholder="Email"
                            name="forgotEmail"
                          />
                        </label>

                        <button className="btn my-10 btn-success text-white">
                          Submit
                        </button>
                      </p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button, it will close the modal */}
                          <button className="btn btn-error text-white">
                            Close
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
                <div className="form-control mt-1">
                  <input type="submit" className="btn btn-primary"></input>
                </div>
                <p className=" py-4 text-green-600">
                  New in this site?{" "}
                  <NavLink
                    to="/register"
                    className="hover:underline text-blue-600 font-bold"
                  >
                    Register Now
                  </NavLink>
                </p>
              </form>
            </div>

            <div className="my-10 w-full">
              <hr className="border-t-[1px] border-slate-400"></hr>
              <button
                onClick={GoogleSignIn}
                className="btn mt-6 mb-4 border-[1px] border-slate-400 w-full flex gap-4 max-w-[400px] mx-auto"
              >
                <span>
                  <img
                    src="https://i.ibb.co/GfwD09T/google.png"
                    className="h-6 w-6"
                  />
                </span>{" "}
                <span>Continue with Google</span>
              </button>
              <button
                onClick={githubSignIn}
                className="btn border-[1px] mb-4 border-slate-400 w-full flex gap-4  max-w-[400px] mx-auto"
              >
                <span>
                  <img
                    src="https://i.ibb.co/bR1nzwX/github.png"
                    className="h-6 w-6"
                  />
                </span>{" "}
                <span>Continue with Github</span>
              </button>
              <button
                onClick={tweeterLogin}
                className="btn border-[1px] border-slate-400 w-full flex gap-4  max-w-[400px] mx-auto"
              >
                <span>
                  <img
                    src="https://i.ibb.co/dLGLw79/Logo-of-Twitter.png"
                    className="h-6 w-6"
                  />
                </span>{" "}
                <span>Continue with Twitter</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Login;
