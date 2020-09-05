import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from '../../context/DataLayer';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from '@material-ui/core';

import './styles.css';

interface IHeader {
    spotify: SpotifyWebApi.SpotifyWebApiJs;
}

const Header: React.FC<IHeader> = ({ spotify }) => {
    const [{ user }, dispatch] = useDataLayerValue();

  return (
      <div className="header">
          <div className="header__left">
        <SearchIcon />
        <input placeholder="Busque artistas, músicas ou podcasts" />
          </div>
          <div className="header__right">
              <Avatar src={user && user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
          </div>

      </div>
  );
}

export default Header;