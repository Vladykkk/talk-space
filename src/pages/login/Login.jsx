import { React, useState } from "react";
import Header from "../../parts/Header";
import { Wrapper, Main } from "../../assets/css/form";
import LoginTitle from "../../components/LoginTitle";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import { FormContainer } from "../../assets/css/form";

const Login = () => {
  const [values, setValues] = useState({
    companyName: "",
    username: "",
    accessCode: "",
  });

  const inputs = [
    {
      id: 1,
      name: "companyName",
      type: "text",
      label: "Назва компанії",
    },
    {
      id: 2,
      name: "username",
      type: "text",
      label: "Ім'я Користувача",
      errorMessage:
        "Ім'я користувача має містити від 3 до 16 символів і не повинно містити жодних спеціальних символів!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "accessCode",
      type: "number",
      label: "Код доступу",
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
          <LoginTitle title="З поверненням!" />
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
              <FormButton ButtonText="Увійти" />
            </form>
          </FormContainer>
        </Main>
      </Wrapper>
    </div>
  );
};

export default Login;
