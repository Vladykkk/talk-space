import React from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Main,
  LoginButtons,
  WelcomeButton,
} from "../../assets/css/form";
import Header from "../../parts/Header";
import LoginTitle from "../../components/LoginTitle";
import FirstPlanet from "../../img/login/first-planet.png";
import SecondPlanet from "../../img/login/second-planet.png";

const Welcome = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <LoginTitle title="Ласкаво Просимо!" />
        <LoginButtons>
          <WelcomeButton to="/login">
            <h2>Увійти в робочий простір</h2>
            <img src={FirstPlanet} alt="First Planet" />
          </WelcomeButton>
        </LoginButtons>
      </Main>
    </Wrapper>
  );
};

export default Welcome;
