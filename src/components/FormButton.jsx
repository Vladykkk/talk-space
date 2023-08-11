import React from "react";
import { ButtonContainer, StyledFormButton } from "../assets/css/form";

const FormButton = (props) => {
  return (
    <div>
      <ButtonContainer>
        <StyledFormButton type="sumbit">{props.ButtonText}</StyledFormButton>
      </ButtonContainer>
    </div>
  );
};

export default FormButton;
