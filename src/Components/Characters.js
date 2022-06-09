import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Characters.css";

const Characters = (props) => {
  const chars = props.characters.map((character) => {
    return (
      <div className="charBox" key={character.id}>
        <Link to={"/Characters/" + character.id}>
          <img
            className="charImage"
            src={character.image}
            alt={character.name}
          />
          <h2 className="charName">{character.name}</h2>
        </Link>
      </div>
    );
  });
  return (
    <div className="charPage">
      <div id="charContainer">{chars}</div>
    </div>
  );
};

export default Characters;
