import React, { useState } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { Button, Spinner, Toast } from "flowbite-react";
import { HiCheck } from "react-icons/hi";
import CustomInput from "../components/customInput";
import { Field } from "formik";
import CustomTextArea from "../components/customTextArea";

// And now we can use these
const SignupForm = () => {
  const [success, setSuccess] = useState();
  const [data, setData] = useState();

  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          Name: "",
          isHadir: "",
          // acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          Name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          Doa: Yup.string()
            .max(225, "maksimal 225 karakter")
            .required("Required"),

          // acceptedTerms: Yup.boolean()
          //   .required("Required")
          //   .oneOf([true], "You must accept the terms and conditions."),
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.log(values);
            setData(values);
            actions.resetForm();
            setSuccess(true);
          }, 400);
          // console.log(actions);
          // actions.resetForm();
          // setSuccess(true)
        }}
      >
        {(props) => {
          const { isSubmitting } = props;
          return (
            <Form>
              {success && (
                <Toast>
                  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                    <HiCheck className="h-5 w-5" />
                  </div>
                  <div className="ml-3 text-sm font-normal">
                    Item moved successfully.
                  </div>
                  <Toast.Toggle />
                </Toast>
              )}
              <CustomInput
                label="Name"
                name="Name"
                type="text"
                placeholder="Nama Kamu"
              />

              {/* <div className="flex gap-5 ">
                <div className="flex items-center mb-4">
                  <Field
                    id="default-radio-1"
                    type="radio"
                    value="hadir"
                    name="isHadir"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    hadir
                  </label>
                </div>
                <div className="flex items-center">
                  <Field
                    id="default-radio-2"
                    type="radio"
                    value="tidak hadir"
                    name="isHadir"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    tidak hadir
                  </label>
                </div>
              </div> */}

              <div className="flex flex-wrap">
                <div className="flex items-center mr-4">
                  <Field
                    id="green-radio"
                    type="radio"
                    value="Ya, saya bisa berhadir"
                    name="isHadir"
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="green-radio"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Ya, saya bisa berhadir
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <Field
                    id="red-radio"
                    type="radio"
                    value="Maaf, saya ada kesibukan lain"
                    name="isHadir"
                    className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="red-radio"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Maaf, saya ada kesibukan lain
                  </label>
                </div>
              </div>

              <CustomTextArea label="Doa kamu" name="Doa" />

              {/* <CustomCheckbox name="acceptedTerms">
                I accept the terms and conditions
              </CustomCheckbox> */}

              <Button className="mt-5" type="submit">
                {isSubmitting && (
                  <Spinner aria-label="Default status example" />
                )}
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>

      {JSON.stringify(data)}
    </>
  );
};
export default SignupForm;
