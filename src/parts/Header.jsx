import React from "react";
import { HeaderContainer } from "../assets/css/registration";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </HeaderContainer>
    </div>
  );
};

export default Header;
