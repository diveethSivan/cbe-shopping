import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Image } from "../../../components";
import { Images, Strings } from "../../../constants";
import "./Header.scss";

const Header = () => {
  const history = useHistory();
  const _renderNavMenu = () => {
    let menu = [];
    Strings.APPLICATION.HEADER.NAV_MENU.forEach((item, index) => {
      menu.push(
        <Link className="menu-item" to={item.URL} key={index}>
          {item.TITLE}
        </Link>
      );
    });
    return menu;
  };
  return (
    <div className="header-wrapper">
      <div className="image-wrapper" onClick={() => history.push("/")}>
        <Image source={Images.LOGO} altText="Logo" />
      </div>
      <div className="nav-menu-wrapper">{_renderNavMenu()}</div>
    </div>
  );
};

export default React.memo(Header);
