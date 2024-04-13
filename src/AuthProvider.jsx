import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "./firebase.config";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { useAsyncError } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [githubUsr, setGithUser] = useState({});
  // const [previousPath, setpreviousPath] = useState("");
  // console.log(children);
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: "Jane Q. User",
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const logInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        toast.success("Successfully logged in!", {
          position: "bottom-right", // Adjust position as needed
          autoClose: 5000, // Close after 5 seconds
          hideProgressBar: false, // Optionally hide progress bar
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error(errorMessage, {
          position: "bottom-right", // Adjust position as needed
        });
      });
  };

  const googleProvider = new GoogleAuthProvider();
  const GoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loginUser = result.user;
        setUser(loginUser);
        console.log(loginUser);
        toast.success("Successfully logged in!", {
          position: "bottom-right", // Adjust position as needed
          autoClose: 5000, // Close after 5 seconds
          hideProgressBar: false, // Optionally hide progress bar
        });
      })
      .catch((error) => {
        console.log("error", error.message);
        toast.error(errorMessage, {
          position: "bottom-right", // Adjust position as needed
        });
      });
  };

  const githubProvider = new GithubAuthProvider();

  const githubSignIn = () => {
    console.log("clicked");
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const githubuser = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        setUser(githubuser);
        toast.success("Successfully logged in!", {
          position: "bottom-right", // Adjust position as needed
          autoClose: 5000, // Close after 5 seconds
          hideProgressBar: false, // Optionally hide progress bar
        });
        // console.log(githubUsr);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        toast.error(errorMessage, {
          position: "bottom-right", // Adjust position as needed
        });
        // ...
      });
  };

  const logOut = () => {
    setLoading(false);
    console.log("Logout Executed");
    toast.success("Successfully logged out from this device!", {
      position: "bottom-right", // Adjust position as needed
      autoClose: 5000, // Close after 5 seconds
      hideProgressBar: false, // Optionally hide progress bar
    });
    return signOut(auth);
  };

  const authInfo = {
    registerUser,
    logInUser,
    loading,
    logOut,
    user,
    setUser,
    GoogleSignIn,
    githubSignIn,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // console.log(currentUser);
        setUser(currentUser);
        setLoading(false);

        // console.log("Loading is now ", loading);
      } else {
        // console.log("No user!!!");
        setLoading(false);
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
