import React from "react";
import { useParams } from "react-router-dom";
import "./CharacterInfo.css";

const CharacterInfo = (props) => {
  const charID = useParams().id;
  const chars = props.characters.map((character) => {
    if (charID == character.id) {
      return (
        <div key={character.id} className="charCard">
          <img
            className="charImage"
            src={character.image}
            alt={character.name}
          />
          <h1 className="charInfoHeader">{character.name}</h1>
          <p className="charInfo">First Episode: {character.firstEpisode}</p>
          <p className="charInfo">Occupation: {character.occupation}</p>
          <p className="charInfo">Voiced By: {character.voicedBy}</p>
          <p className="charInfo">
            Wiki Link:{" "}
            <a href={character.wikiUrl} target="_blank">
              {character.name}
            </a>
          </p>
        </div>
      );
    }
  });
  return <div className="charCardContainer">{chars}</div>;
};

export default CharacterInfo;
