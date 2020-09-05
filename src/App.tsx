import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import "./App.css";
import { getTokenFromUrl } from "./services/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from "./context/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(user);

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
  }, [dispatch, token]);

  return <div className="app">{token ? <Player spotify='' /> : <Login />}</div>;
}

export default App;
