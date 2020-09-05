import React from "react";

import "./styles.css";
import { IconProps } from "@material-ui/core";

interface ISidebarOption {
  title?: string;
  Icon?: any;
}

const SidebarOption: React.FC<ISidebarOption> = ({ title, Icon }) => {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOption;
