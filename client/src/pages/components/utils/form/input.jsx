import { ErrorMessage, Field, useField } from "formik";
import React from "react";
import TextError from "./textError";

const Input = (props) => {
  const { label, name, autocomplete, ...rest } = props;
  const [field, meta] = useField(props);

  return (
    <div className="form-control">
      <label htmlFor={name}> {label}</label>
      <Field
        id={name}
        name={name}
        autoComplete={autocomplete}
        {...rest}
        className={meta.touched && meta.error ? "input-error" : "input"}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
export default Input;
