import React from "react";
import Input from "./input";
import RadioButton from "./radioButton";
import Textarea from "./textarea";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
    case "radio":
      return <RadioButton {...rest} />;
    case "checkbox":
    case "date":
    default:
      return null;
  }
  return <div>FormikControl</div>;
};

export default FormikControl;
