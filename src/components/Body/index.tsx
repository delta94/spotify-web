import React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import "./styles.css";
import Header from "../Header";
import { useDataLayerValue } from "../../context/DataLayer";
import SongRow from "../SongRow";

interface IBody {
  spotify: SpotifyWebApi.SpotifyWebApiJs;
}

const Body: React.FC<IBody> = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img
          src={discover_weekly?.images[0].url}
          alt="Descobertas da semana"
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Descobertas da semana</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item: any) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
