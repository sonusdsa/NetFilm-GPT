import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div>
      <div className=" w-screen aspect-video absolute  text-white bg-gradient-to-r from-black">
        <h1 className=" ml-16 font-extrabold text-4xl mt-44 my-4">{title} </h1>
        <p className=" ml-16 font-semibold text-base text-wrap text-start size-1/4">
          {description}{" "}
        </p>
        <div className=" mt-2 ml-16 ">
          <button className=" bg-white text-black p-3 rounded-lg font-bold text-xl px-6">
            Play
          </button>
          <button className=" ml-3 bg-slate-400 text-black p-3 rounded-lg font-bold text-xl px-6">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
