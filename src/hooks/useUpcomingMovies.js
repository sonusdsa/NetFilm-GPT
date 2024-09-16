import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../utils/moviesSlice";

const useUpComingMovies = () => {
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);

  useEffect(() => {
    if (!upComingMovies) getUpcomingMovies();
  }, []);
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };
};

export default useUpComingMovies;
