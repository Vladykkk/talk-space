import React from "react";
import Header from "../../parts/Header";
import {
  Wrapper,
  Main,
  Members,
  User,
  UserName,
  UserDepartment,
  UserImage,
  CopyLink,
  AddMember,
  MemberImage,
} from "../../assets/css/form";
import FormButton from "../../components/FormButton";
import addMember from "../../img/login/add-member.png";
import userImg from "../../img/login/user-img.png";
import copyIcon from "../../img/login/copy.png";

const RegistrationFourth = () => {
  return (
    <div>
      <Wrapper>
        <Header />
        <Main>
          <Members>
            <User>
              <UserName>Козак Олександр</UserName>
              <UserDepartment>Розробка/Front end</UserDepartment>
              <UserImage src={userImg} />
              <CopyLink href="#">
                <img src={copyIcon} alt="copy icon" />
                Скопіювати посилання і код
              </CopyLink>
            </User>
            <AddMember>
              <MemberImage src={addMember} alt="add member" />
            </AddMember>
          </Members>
          <FormButton buttonText="Створити простір!" />
        </Main>
      </Wrapper>
    </div>
  );
};

export default RegistrationFourth;
