import React from "react";
import { Title } from "../assets/css/registration";

const LoginTitle = (props) => {
  return (
    <div>
      <Title>{props.title}</Title>
    </div>
  );
};

export default LoginTitle;
