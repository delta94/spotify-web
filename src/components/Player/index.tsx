import React from "react";

import "./styles.css";
import Sidebar from "../../Sidebar";

interface Iplayer {
  spotify: '';
}

const Player: React.FC<Iplayer> = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
      </div>
    </div>
  );
};

export default Player;
