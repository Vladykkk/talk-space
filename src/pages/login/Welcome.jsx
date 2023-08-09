import React from "react";
import {
  Wrapper,
  Main,
  LoginButtons,
  Button,
} from "../../assets/css/registration";
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
          <Button>
            <h2>Увійти в робочий простір</h2>
            <img src={FirstPlanet} alt="First Planet" />
          </Button>
          <Button href="registration">
            <h2>Створити робочий простір</h2>
            <img src={SecondPlanet} alt="Second Planet" />
          </Button>
        </LoginButtons>
      </Main>
    </Wrapper>
  );
};

export default Welcome;
