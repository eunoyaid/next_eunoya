import { useField } from "formik";

const CustomRadioButton = ({ label, value, children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "radio" });
  return (
    // <div>
    //   <label className="radio-input">
    //     <input type="radio" {...field} {...props} />
    //     {children}
    //   </label>
    //   {meta.touched && meta.error ? (
    //     <div className="error">{meta.error}</div>
    //   ) : null}
    // </div>
    <>
      <div class="flex items-center mb-4">
        <input
          {...props}
          value={value}
          id="default-radio-1"
          type="radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          htmlFor={props.id || props.name}
        >
          {label}
        </label>
      </div>
    </>
  );
};
// import {useField} from "formik";
// export const Radio = ({type, label,...props}) => {
//    const [field, meta] = useField(props);
//    return (
//      <>
//        <label className="inline-flex items-center mr-6">
//          <input  type={type} {...field}{...props} />
//          <span className="ml-2">{label}</span>
//        </label>
//      </>
//    );
//  };

export default CustomRadioButton;
