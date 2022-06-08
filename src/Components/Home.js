import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="videoContainer">
        <iframe
          class="video"
          src="https://www.youtube.com/embed/FiHj8wEKTlI?controls=0&autoplay=1&mute=1"
          allow="autoplay; mute=1; controls=0"
          autoplay="1"
          allowfullscreen
        ></iframe>
        {/* <div className="overlay">Bob's Burgers</div> */}
      </div>
    </div>
  );
};

export default Home;
