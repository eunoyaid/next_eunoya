import React from "react";
import Input from "./input";
import Textarea from "./textarea";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":  return <Textarea {...rest} />;
    case "select":
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
  return <div>FormikControl</div>;
};

export default FormikControl;
