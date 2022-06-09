import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="videoContainer">
      <iframe
        className="video"
        src="https://www.youtube.com/embed/p0xHMZ9no_o?controls=0&autoplay=1&mute=1"
        allow="autoplay; mute; controls"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Home;
