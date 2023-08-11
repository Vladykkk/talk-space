import styled from "styled-components";
import SkyTop from "../../img/login/sky-top.png";
import SkyBottom from "../../img/login/sky-bottom.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: clip;
  background-image: url(${SkyTop}), url(${SkyBottom});
  background-position: top left, bottom right;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 110px;
  width: 100%;
  a {
    margin-left: 50px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  max-width: 570px;
  width: 100%;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
  font-size: 1.125rem;
`;

export const StyledFormInput = styled.input`
  height: 50px;
  padding: 0px 20px;
  border: 1px solid #acacac;
  border-radius: 10px;
  &:invalid[focused="true"] {
    border: 1px solid red;
  }
  &:invalid[focused="true"] ~ span {
    display: block;
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;

export const StyledFormButton = styled.button`
  width: 275px;
  height: 40px;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 20px;
  color: #fff;
  background-color: #665cb1;
`;

export const ErrorMessage = styled.span`
  display: none;
  padding: 3px;
  color: red;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-family: "Inter";
  color: #665cb1;
  margin-bottom: 100px;
`;

export const LoginButtons = styled.div`
  display: flex;
  gap: 100px;
`;

export const Button = styled.a`
  width: 300px;
  padding: 30px;
  text-align: center;
  font-size: 1.5rem;
  cursor: pointer;
  border: 2px solid #9181fa;
  border-radius: 15px;
  transition: 0.5s ease;
  &:hover {
    border: 2px solid #893fd6;
    box-shadow: 0 0 5px 5px #dddffd;
  }
  h2 {
    font-size: 24px;
    margin-bottom: 40px;
  }
`;
