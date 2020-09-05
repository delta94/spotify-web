import React from "react";

import "./styles.css";
import Sidebar from "../../components/Sidebar";
import Body from "../../components/Body";
import Footer from "../Footer";
import SpotifyWebApi from "spotify-web-api-js";


interface Iplayer {
  spotify: SpotifyWebApi.SpotifyWebApiJs;
}

const Player: React.FC<Iplayer> = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
