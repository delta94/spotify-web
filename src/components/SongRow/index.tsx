import React from "react";

import "./styles.css";

interface ISongRow {
  track: {
    name: string;
    album: {
      name: string;
      images: {
        url: string;
      }[];
    };
    artists: {
      name: string;
    }[];
  };
}

const SongRow: React.FC<ISongRow> = ({ track }) => {
  return (
    <div className="songRow">
      <img className="songRow__album" src={track.album.images[0].url} alt={track.name} />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
