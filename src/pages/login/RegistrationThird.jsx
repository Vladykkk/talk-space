import React from "react";
import Header from "../../parts/Header";
import {
  Wrapper,
  Main,
  MemberImage,
  ImageContainer,
} from "../../assets/css/form";
import LoginTitle from "../../components/LoginTitle";
import addMember from "../../img/login/add-member.png";

const RegistrationThird = () => {
  return (
    <div>
      <Wrapper>
        <Header />
        <Main>
          <LoginTitle title="Додайте колег у свій простір!" />
          <ImageContainer>
            <MemberImage src={addMember} alt="add member" />
          </ImageContainer>
        </Main>
      </Wrapper>
    </div>
  );
};

export default RegistrationThird;
