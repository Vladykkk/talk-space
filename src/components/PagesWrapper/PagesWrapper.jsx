import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/pagesWrapper.css";

import Logo from "../../img/logo.svg";
import groups from "../../img/menu/groups.svg";
import profile from "../../img/menu/profile.svg";
import messages from "../../img/menu/messages.svg";
import settings from "../../img/menu/settings.svg";
import exit from "../../img/menu/exit.svg";

const PagesWrapper = (props) => {
  return (
    <div className="pageWrapper">
      <div className="sideMenu">
        <div className="menuBlock">
        <Link className="logowrap" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <ul className="itemsList">
          <li className="menuItem">
            <Link className="menuLink" to="/">
            <img className="linkIcon" src={groups} alt="logo" />
              <span className="menulinktext">Групи</span>
            </Link>
          </li>
          <li className="menuItem">
            <Link className="menuLink" to="/">
            <img className="linkIcon" src={profile} alt="logo" />
              <span className="menulinktext">Мій профіль</span>
            </Link>
          </li>
          <li className="menuItem">
            <Link className="menuLink" to="/">
            <img className="linkIcon" src={messages} alt="logo" />
              <span className="menulinktext">Повідомлення</span>
            </Link>
          </li>
          <li className="menuItem">
            <Link className="menuLink" to="/">
            <img className="linkIcon" src={settings} alt="logo" />
              <span className="menulinktext">Налаштування</span>
            </Link>
          </li>
        </ul>
        </div>
        
        <div className="exitBlock">
          <Link className="exitBlockLink" to="/">
          <img className="exitBlockLinkIcon" src={exit} alt="logo" />
            <span className="exitBlockLinkText">Вихід</span>
          </Link>
        </div>
      </div>
      <div className="contentWrapper"></div>
    </div>
  );
};

export default PagesWrapper;
