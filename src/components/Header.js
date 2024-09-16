import React, { useEffect } from "react";
import image from "../components/image/img.png";
import { useDispatch, useSelector } from "react-redux";
import UserDropDown from "./UserDropDown";
import HeaderList from "./HeaderList";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { languageChange } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const handleGptButtonClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(languageChange(e.target.value));
  };

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
    <div className="  absolute w-screen h-20 bg-gradient-to-b from-transparent z-10 flex flex-col  justify-between  ">
      <img
        className=" absolute left-24 top-4  w-36 mx-auto md:mx-0  "
        alt="NetFilm-GPT logo"
        src={image}
      />
      {user && (
        <div>
          <HeaderList />
          <div className=" flex  mt-2  justify-between ">
            {showGptSearch && (
              <select
                className=" p-2 m-2 bg-gray-500 text-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <button
              className=" md:absolute z-10 ml-2  top-4 right-96 p-2 font-semibold bg-purple-600  text-white rounded-lg"
              onClick={handleGptButtonClick}
            >
              {showGptSearch ? "Home Page" : "GPT-Search"}
            </button>
            <img
              className=" hidden md:inline-block md:absolute z-10 mr-1 top-2 right-28 h-12 w-12 rounded-lg"
              alt="userIcon"
              src={user?.photoURL}
            />
            <UserDropDown />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
