import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SidebarOption from "../SidebarOption";

import logo from "../../assets/img/logo.svg";
import "./styles.css";
import { useDataLayerValue } from "../../context/DataLayer";

interface IPlaylistItems {
  name: string;
}

const Sidebar: React.FC = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);

  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={logo} alt="Spotify Logo" />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Sua bilioteca" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar__title">Playlists</strong>
      <hr />

      {playlists?.items?.map((playlist: IPlaylistItems, index: number) => (
        <SidebarOption key={index} title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;
