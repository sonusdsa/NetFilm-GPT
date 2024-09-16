import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovies = movies[0];
  const { original_title, overview, id } = mainMovies;
  return (
    <div className=" bg-gray-700 pt-36 md:pt-0 ">
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground moviesId={id} />
    </div>
  );
};

export default MainContainer;
