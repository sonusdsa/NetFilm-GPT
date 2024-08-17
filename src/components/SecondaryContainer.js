import React from "react";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";
/**
 * -Movies List
 *   -Movie card *n
 * -Movies List
 *   -Movie card *n
 * -Movies List
 *   -Movie card *n
 *
 *
 *
 */
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className=" -mt-52  pl-12 relative z-10">
          <MovieLists
            title={"Now Playing Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MovieLists title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieLists
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />
          <MovieLists
            title={"Up-Coming Movies"}
            movies={movies.upComingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
