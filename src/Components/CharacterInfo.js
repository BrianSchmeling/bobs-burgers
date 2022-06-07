import React from "react";
import { useParams } from "react-router-dom";

const CharacterInfo = (props) => {
  const charID = useParams().id;
  const chars = props.characters.map((character) => {
    if (charID == character.id) {
      return (
        <div key={character.id}>
          <img
            className="charImage"
            src={character.image}
            alt={character.name}
          />
          <h1>{character.name}</h1>
          <p>First Episode: {character.firstEpisode}</p>
          <p>Occupation: {character.occupation}</p>
          <p>Voiced By: {character.voicedBy}</p>
          <p>
            Wiki Link:{" "}
            <a href={character.wikiUrl} target="_blank">
              {character.name}
            </a>
          </p>
        </div>
      );
    }
  });
  return <div>{chars}</div>;
};

export default CharacterInfo;
