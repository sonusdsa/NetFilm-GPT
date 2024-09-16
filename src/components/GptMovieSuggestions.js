import React from "react";
import { useSelector } from "react-redux";
import MovieLists from "./MovieLists";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((Store) => Store.gpt);
  if (!movieNames) return null;

  return (
    <div className="flex justify-center">
      <div className=" p-4 w-1/2    bg-black opacity-75 text-white ">
        <h1 className=" text-4xl text-white font-bold">hello....</h1>
        <div className="">
          {movieNames.map((movieName, index) => (
            <MovieLists
              key={index} // using index as a fallback for key
              title={movieName}
              movies={movieResults[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
