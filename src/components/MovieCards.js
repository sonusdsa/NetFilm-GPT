import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className=" w-28 md:w-48 pr-2 md:pr-4">
      <img alt="poster_img" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCards;
