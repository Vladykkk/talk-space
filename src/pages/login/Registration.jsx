import React from "react";
import Header from "../../parts/Header";
import LoginTitle from "../../components/LoginTitle";
import { Wrapper, Main } from "../../assets/css/registration";

const Registration = () => {
  return (
    <div>
      <Wrapper>
        <Header />
        <Main>
          <LoginTitle title="Ласкаво Просимо!" />
        </Main>
      </Wrapper>
    </div>
  );
};

export default Registration;
