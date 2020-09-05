import React from 'react';
import logo from '../../assets/img/logo.svg';

import './styles.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={logo} alt="Spotify Logo"/>
    </div>
  );
}

export default Sidebar;