import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import './styles.css';

interface IBody {
  spotify: SpotifyWebApi.SpotifyWebApiJs;
}

const Body: React.FC<IBody> = ({ spotify }) => {
  return (
      <div className="body">
          <h1>body</h1>
      </div>
  );
}

export default Body;