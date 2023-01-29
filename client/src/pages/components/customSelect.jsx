import { useField } from "formik";
import React from "react";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // console.log("field", field);
  // console.log("meta", meta);
  return (
    <div>
      <label>{label} </label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : "input"}
      />
      {meta.touched && meta.error && <div className="error">{meta.error} </div>}
    </div>
  );
};

export default CustomSelect;
