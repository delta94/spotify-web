import React from "react";

import "./styles.css";
import Sidebar from "../../components/Sidebar";
import Body from "../../components/Body";
import Footer from "../Footer";


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
      <Footer />
    </div>
  );
};

export default Player;
