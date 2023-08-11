import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper, Main } from "../../assets/css/form";
import Header from "../../parts/Header";
import LoginTitle from "../../components/LoginTitle";
import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import { FormContainer } from "../../assets/css/form";

const RegistrationSecond = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      label: "Електронна пошта",
      errorMessage: "Це має бути дійсна електронна адреса!",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      label: "Пароль",
      errorMessage:
        "Пароль повинен містити 8-20 символів і включати щонайменше 1 літеру, 1 цифру та 1 спеціальний символ!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      label: "Підтвердіть пароль",
      errorMessage: "Паролі не співпадають!",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Wrapper>
        <Header />
        <Main>
          <LoginTitle title="Ласкаво просимо!" />
          <FormContainer>
            <form onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              <FormButton ButtonText="Далі" />
            </form>
          </FormContainer>
        </Main>
      </Wrapper>
    </div>
  );
};

export default RegistrationSecond;
