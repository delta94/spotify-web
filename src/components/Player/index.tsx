import React from "react";

import "./styles.css";
import Sidebar from "../../components/Sidebar";
import Body from "../../components/Body";


interface Iplayer {
  spotify: '';
}

const Player: React.FC<Iplayer> = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};

export default Player;
