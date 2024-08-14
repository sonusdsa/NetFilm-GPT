import React, { useRef, useState } from "react";
import Header from "./Header";
import image from "../components/image/netflixBackgroundImg.jpg";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    let message;

    if (!isSignInForm) {
      // If it's the Sign-Up form, include the name in validation
      message = checkValidateData(
        name.current.value, // Include name validation
        email.current.value,
        password.current.value
      );
    } else {
      // If it's the Sign-In form, skip name validation
      message = checkValidateData(
        "",
        email.current.value,
        password.current.value
      );
    }

    setErrorMessage(message);

    if (message) return;

    //Sign Up / Sign In Logic

    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,

        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //Sign in Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }

    // if (!message) {
    //   // Clear the fields only if there's no validation error
    //   if (name.current) name.current.value = "";
    //   email.current.value = "";
    //   password.current.value = "";
    // }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <Header />
      <div className=" absolute">
        <img alt="homoImg" src={image} />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" absolute w-1/3 h-[43rem] bg-black mt-28 mx-auto right-0 left-0 bg-opacity-80 rounded-lg"
        >
          <h1 className=" font-bold text-3xl text-white pt-8 pl-20">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              className=" p-4 ml-20  mt-8 w-8/12 border border-slate-100 opacity-50  rounded-lg bg-black placeholder:text-white text-white font-semibold"
              placeholder="Full name"
              type="text"
              required
            />
          )}
          <input
            ref={email}
            className=" p-4 ml-20  mt-8 w-8/12 border border-slate-100 opacity-50  rounded-lg bg-black placeholder:text-white text-white font-semibold"
            placeholder="Email or mobile number"
            type="text"
            required
          ></input>
          <input
            ref={password}
            className=" p-4 border border-slate-100  ml-20  mt-4 w-8/12 rounded-lg bg-black opacity-50 placeholder:text-white placeholder:font-semibold text-white font-extrabold"
            placeholder="Password"
            type="password"
            required
          ></input>
          <p className="ml-20 p-1 text-red-600">{errorMessage}</p>
          <button
            className=" p-2 ml-20  mt-4 w-8/12 text-xl bg-red-600 rounded-lg cursor-pointer text-white font-semibold"
            onClick={() => handleButtonClick()}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <h1 className=" p-4 text-lg text-center justify-center text-white">
            OR
          </h1>
          <button className=" p-2 ml-20 w-8/12 text-xl font-semibold text-center justify-center rounded-lg bg-white bg-opacity-20 text-white ">
            Use a sing-in code
          </button>
          <h2 className=" p-2 text-lg text-center justify-center text-white cursor-pointer hover:underline">
            Forgot password?
          </h2>
          <div class="flex items-start">
            <div class="flex items-center h-5 ml-20">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border rounded-lg cursor-pointer  "
              />
            </div>
            <label
              for="remember"
              className="ms-2 text-sm font-medium text-white"
            >
              Remember me
            </label>
          </div>
          <h1 className=" ml-20 mt-2 text-base text-slate-400">
            {isSignInForm
              ? "New to NetFilm-GPT? "
              : "Already have an account. "}
            <span
              className=" font-semibold text-lg text-white cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign up now." : "Sign In"}
            </span>
          </h1>
          <p className="ml-20 text-sm text text-balance mt-2 text-slate-300 ">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <span className=" text-blue-500 hover:underline cursor-pointer">
              Learn more.
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
