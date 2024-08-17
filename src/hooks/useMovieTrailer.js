import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailers } from "../utils/moviesSlice";

const useMovieTrailer = (moviesId) => {
  const dispatch = useDispatch();

  // Fetch trailer video && Update the store with trailer video data

  useEffect(() => {
    getMoviesVideos();
  }, []);

  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        moviesId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0].type;
    dispatch(addTrailers(trailer));
  };
};

export default useMovieTrailer;
