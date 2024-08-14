import React from "react";
import image from "../components/image/img1.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleButton = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });

    console.log("signOut");
  };
  return (
    <div className=" absolute w-screen  -mt-8 bg-gradient-to-b from-transparent z-10">
      <img className=" w-48 ml-44 " alt="NetFilm-GPT logo" src={image} />
      <div>
        <img
          className="absolute z-10 top-10 right-28 h-12 w-12 rounded-lg"
          alt="userIcon"
          src={user?.photoURL}
        />
        <button
          onClick={handleButton}
          className=" absolute top-0 right-8 z-10 font-semibold mt-12 p-1 text-white cursor-pointer  bg-red-500 hover:bg-red-800 border border-black rounded-lg  "
        >
          SignOut
        </button>
      </div>
    </div>
  );
};

export default Header;
