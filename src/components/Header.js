import React, { useEffect } from "react";
import image from "../components/image/img.png";
import { useDispatch, useSelector } from "react-redux";
import UserDropDown from "./UserDropDown";
import HeaderList from "./HeaderList";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User SignIn/SignUp Logic
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out Logic
        navigate("/");
        dispatch(removeUser());
      }
    });
    // Unsubscribe when components unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className=" relative w-screen h-20 bg-gradient-to-b from-transparent z-10 ">
      <img
        className=" absolute left-24 top-4  w-36  "
        alt="NetFilm-GPT logo"
        src={image}
      />
      {user && (
        <div>
          <HeaderList />
          <img
            className="absolute z-10 top-2 right-28 h-12 w-12 rounded-lg"
            alt="userIcon"
            src={user?.photoURL}
          />
          <UserDropDown />
        </div>
      )}
    </div>
  );
};

export default Header;
