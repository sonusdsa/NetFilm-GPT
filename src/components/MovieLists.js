import React from "react";
import MovieCards from "./MovieCards";

const MovieLists = ({ title, movies }) => {
  return (
    <div className=" px-2">
      <h1 className="  md:text-3xl py-4  text-white">{title}</h1>
      <div className=" flex overflow-x-scroll ">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCards key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieLists;
