import React from "react";
import { Link } from "react-router-dom";

import Logo from "../img/logo.png";

const Header = () => {
  return (
    <div>
      <div className="headerContainer">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
