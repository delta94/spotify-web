import React from "react";
import SpotifyWebApiJs from "spotify-web-api-js";

import "./styles.css";

interface Iplayer {
  spotify: '';
}

const Player: React.FC<Iplayer> = ({ spotify }) => {
  return (
    <div className="player">
      <h1>player</h1>
    </div>
  );
};

export default Player;
