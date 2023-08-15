import { React, useState } from "react";
import Header from "../../parts/Header";
import { Wrapper, Main } from "../../assets/css/form";
import LoginTitle from "../../components/LoginTitle";
import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import { FormContainer } from "../../assets/css/form";

const Registration = () => {
  const [values, setValues] = useState({
    companyName: "",
    username: "",
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

export default Registration;
