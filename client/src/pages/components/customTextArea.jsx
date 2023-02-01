import { useField } from "formik";
import React from "react";

const CustomTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : "input"}
      />
      {meta.touched && meta.error && <div className="error">{meta.error} </div>}
    </div>
  );
};

export default CustomTextArea;
