import { useField } from "formik";
import React from "react";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
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

// const MySelect = ({ label, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <div>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <select {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </div>
//   );
// };

export default CustomSelect;
