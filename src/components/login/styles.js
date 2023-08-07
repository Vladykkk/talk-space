import styled from "styled-components";
import SkyTop from "../../img/login/sky-top.png";
import SkyBottom from "../../img/login/sky-bottom.png";

export const Wrapper = styled.div`
  padding: 0 15px;
  background-image: url(${SkyTop}), url(${SkyBottom});
  background-position: top left, bottom right;
  background-repeat: no-repeat;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  min-height: 110px;
  width: 100%;
  a {
    margin-left: 50px;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-family: "Inter";
  margin-bottom: 100px;
`;

export const LoginButtons = styled.div`
  display: flex;
  gap: 100px;
`;

export const Button = styled.div`
  width: 300px;
  padding: 30px;
  text-align: center;
  font-size: 1.5rem;
  cursor: pointer;
  border: 2px solid #9181fa;
  border-radius: 15px;
  &:hover {
    border: 2px solid #893fd6;
    transition: 0.5s;
    box-shadow: 0 0 5px 5px #dddffd;
  }
  p {
    margin-bottom: 40px;
  }
`;
