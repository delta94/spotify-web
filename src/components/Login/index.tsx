import React from 'react';

import logo from '../../assets/img/logo.svg';

import './styles.css';
import { loginUrl } from '../../services/spotify';

const Login: React.FC = () => {
  return (
      <div className="login">
            <img className="login__logo" src={logo} alt="Spotify logo"/>
            <a href={loginUrl}>Login com Spotify</a>
      </div>
  );
}

export default Login;