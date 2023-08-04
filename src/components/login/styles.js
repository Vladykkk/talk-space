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
  min-height: 50px;
  width: 100%;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-family: "Inter";
  margin-bottom: 100px;
`;

export const LoginButtons = styled.div`
  display: flex;
  gap: 200px;
`;

export const ButtonLeft = styled.div`
  cursor: pointer;
`;

export const ButtonRight = styled.div`
  cursor: pointer;
`;
