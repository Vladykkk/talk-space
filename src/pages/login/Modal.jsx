import { React, useState } from "react";
import Header from "../../parts/Header";
import { Wrapper, Main } from "../../assets/css/form";
import LoginTitle from "../../components/LoginTitle";
import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import { FormContainer } from "../../assets/css/form";

const Modal = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    department: "",
    jobTitle: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      label: "Прізвище та ім'я",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      label: "Електронна пошта",
      errorMessage: "Це має бути дійсна електронна адреса!",
      required: true,
    },
    {
      id: 3,
      name: "department",
      type: "text",
      label: "Відділ",
      required: true,
    },
    {
      id: 3,
      name: "jobTitle",
      type: "text",
      label: "Посада",
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
            </form>
          </FormContainer>
        </Main>
      </Wrapper>
    </div>
  );
};

export default Modal;
