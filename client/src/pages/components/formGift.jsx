import React, { useState } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { Button, Spinner, Toast } from "flowbite-react";
import { HiCheck } from "react-icons/hi";
import CustomInput from "../components/customInput";
import { Field } from "formik";
import CustomTextArea from "../components/customTextArea";

// And now we can use these
const FormGift = () => {
  const [success, setSuccess] = useState();
  const [data, setData] = useState();

  return (
    <>
      <Formik
        initialValues={{
          Name: "",
          Nominal: "",
          // acceptedTerms: false,
        }}
        validationSchema={Yup.object({
          Name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("hmmm tuliskan nama mu dong disini "),
          Nominal: Yup.number().required(
            "yahh sepertinya kamu belum memasukan nomianal hadiah mu"
          ),

          // acceptedTerms: Yup.boolean()
          //   .required("Required")
          //   .oneOf([true], "You must accept the terms and conditions."),
        })}
        onSubmit={(values, actions) => {
          console.log(values);
          setData(values);
          setSuccess("wahh terimakasih Hadiah nya ya :)");
          actions.resetForm();
        }}
      >
        {(props) => {
          const { isSubmitting } = props;
          return (
            <div className="@container">
              <div className="px-5 mt-5 w-full form-wrapper">
                <Form>
                  {success && (
                    <Toast className="mb-6">
                      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                        <HiCheck className="h-5 w-5" />
                      </div>
                      <div className="ml-3 text-sm font-normal">{success}</div>
                      <Toast.Toggle />
                    </Toast>
                  )}
                  <CustomInput
                    label="Nama"
                    name="Name"
                    type="text"
                    placeholder="tuliskan nama mu"
                  />
                  <CustomInput
                    label="Nominal Hadiah"
                    name="Nominal"
                    type="number"
                    placeholder="tuliskan nominal hadiah mu"
                  />
                  <Button className="mt-5 w-full" type="submit">
                    {isSubmitting && (
                      <Spinner aria-label="Default status example" />
                    )}
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          );
        }}
      </Formik>

      {JSON.stringify(data)}
    </>
  );
};
export default FormGift;
