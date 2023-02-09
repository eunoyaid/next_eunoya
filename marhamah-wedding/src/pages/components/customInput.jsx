import { useField } from "formik";
import React from "react";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className={meta.touched && meta.error ? "input-error" : "input"}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && <p className="error">{meta.error} </p>}
    </div>
  );
};

export default CustomInput;
