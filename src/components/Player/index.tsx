import React from "react";
import SpotifyWebApiJs from "spotify-web-api-js";

import "./styles.css";

interface Iplayer {
  spotify: '';
}

const Player: React.FC<Iplayer> = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        
      </div>
    </div>
  );
};

export default Player;
