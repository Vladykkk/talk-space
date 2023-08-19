import React from "react";
import { ButtonContainer, StyledFormButton } from "../assets/css/form";

const FormButton = (props) => {
  return (
    <div>
      <ButtonContainer>
        <StyledFormButton type="submit">{props.buttonText}</StyledFormButton>
      </ButtonContainer>
    </div>
  );
};

export default FormButton;
