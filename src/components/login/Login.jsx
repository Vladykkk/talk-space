import React from "react";
import {
  Wrapper,
  Title,
  LoginContainer,
  LoginButtons,
  ButtonLeft,
  ButtonRight,
  Header,
} from "./styles";
import FirstPlanet from "../../img/login/first-planet.png";
import SecondPlanet from "../../img/login/second-planet.png";
import Logo from "../../img/logo.png";

const Login = () => {
  return (
    <Wrapper>
      <Header>
        <a href="">
          <img src={Logo} alt="" />
        </a>
      </Header>
      <LoginContainer>
        <Title>Ласкаво просимо!</Title>
        <LoginButtons>
          <ButtonLeft>
            <p>Увійти в робочий простір</p>
            <img src={FirstPlanet} alt="" />
          </ButtonLeft>
          <ButtonRight>
            <p>Створити робочий простір</p>
            <img src={SecondPlanet} alt="" />
          </ButtonRight>
        </LoginButtons>
      </LoginContainer>
    </Wrapper>
  );
};

export default Login;
