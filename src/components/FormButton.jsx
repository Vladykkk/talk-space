import React from "react";
import "../assets/css/button.css";

const FormButton = (props) => {
  return (
    <div>
      <button className="button" type="submit">
        {props.buttonText}
      </button>
    </div>
  );
};

export default FormButton;
