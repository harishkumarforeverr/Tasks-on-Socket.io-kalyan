import React from "react";
import {
  UpCircleOutlined,
  SettingOutlined,
  ProjectOutlined,
  PullRequestOutlined,
} from "@ant-design/icons";
import "./Header.css";
function Header() {
  const HeaderData = [
    {
     
      title: "File",
    },
    { 
      title: "Options",
    },
    { 
      title: "Tools",
    },
    { 
      title: "Help",
    },
  ];
  return (
    <div className="HeadersIconsTitle">
      {HeaderData.map((obj) => {
        return (
          <div> 
            <div className="Header_title"> {obj.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Header;
