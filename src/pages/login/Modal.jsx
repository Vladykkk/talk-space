import { React, useState } from "react";
import Header from "../../parts/Header";
import {
  Wrapper,
  Main,
  ModalForm,
  ButtonCode,
  ButtonAdd,
} from "../../assets/css/form";
import FormInput from "../../components/FormInput";

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
          <ModalForm>
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
          </ModalForm>
          <ButtonCode>Згенерувати унікальний код</ButtonCode>
          <ButtonAdd>Додати</ButtonAdd>
        </Main>
      </Wrapper>
    </div>
  );
};

export default Modal;
