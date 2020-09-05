import React from "react";

import "./styles.css";

interface ISidebarOption {
  title?: string;
  Icon?: any;
  option?: string;
}

const SidebarOption: React.FC<ISidebarOption> = ({ title, Icon }) => {
  return (
    <div className="sidebarOption">
      <p>{title}</p>
    </div>
  );
};

export default SidebarOption;
