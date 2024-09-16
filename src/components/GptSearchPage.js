import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import image from "../components/image/netflixBackgroundImg.jpg";

const GptSearchPage = () => {
  return (
    <>
      <div className=" fixed -z-10">
        <img
          className=" object-cover h-screen md:h-full  "
          alt="homoImg"
          src={image}
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
