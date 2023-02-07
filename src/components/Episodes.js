import React from "react";

const Episode = (props) => {
  const { episode } = props;
  const { id, image, name, season, number, summary, runtime } = episode;
  const imgsrc = image || "https://i.ibb.co/2FsfXqM/stranger-things.png";

  console.log("episode: ", episode);

  return (
    <div className="episode" key={id} data-testid="ep-container">
      <img
        className="episode-image"
        src={imgsrc}
        alt={imgsrc}
        data-testid="ep-img"
      />
      <div className="episode-info">
        <p className="episode-number">
          Season {season}, Episode {number}
        </p>
        <h3 data-testid="ep-name">{name}</h3>
        <p>{summary}</p>
        <div className="flex-spacer" />
        <p className="episode-runtime">{runtime} minutes</p>
      </div>
    </div>
  );
};

export default Episode;