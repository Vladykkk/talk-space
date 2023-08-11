import { useState } from "react";
import {
  FormItem,
  FormLabel,
  StyledFormInput,
  ErrorMessage,
} from "../assets/css/form";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <StyledFormInput
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </FormItem>
  );
};

export default FormInput;
