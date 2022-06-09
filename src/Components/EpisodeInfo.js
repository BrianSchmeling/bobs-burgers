import React from "react";
import { useParams } from "react-router-dom";
import "./EpisodeInfo.css";

const EpisodeInfo = ({ episodes, data, apiURL }) => {
  const seasonID = useParams().season;
  const season = episodes.map((episode) => {
    const edID = data.map((datum) => {
      if (datum.id == episode.id) {
        if (seasonID == episode.season) {
          return (
            <div className="episodeBox" key={datum.id}>
              <p className="eipsodeName">{episode.name}</p>
              <p className="episodeDesc">{datum.description}</p>
              <div className="episodeInfoBox">
                <p className="episodeInfo">
                  Season: {episode.season}, Episode: {episode.episode} / Air
                  Date: {episode.airDate} / Total Viewers:{" "}
                  {episode.totalViewers}
                </p>
              </div>
            </div>
          );
        }
      }
    });
    return <div key={episode.id}>{edID}</div>;
  });
  return <div>{season}</div>;
};

export default EpisodeInfo;
