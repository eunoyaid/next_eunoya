import React, { useState } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { Button, Spinner } from "flowbite-react";
import { HiCheck } from "react-icons/hi";
import CustomInput from "../components/customInput";
import toast, { Toaster } from "react-hot-toast";

const Toast = () =>
  toast("wahh terimakasih hadiah nya", {
    icon: "😁",
  });

// And now we can use these
const FormGift = () => {
  const [success, setSuccess] = useState();
  const [data, setData] = useState();

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
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
          setData(values);
          Toast();
          actions.resetForm();
        }}
      >
        {(props) => {
          const { isSubmitting } = props;
          return (
            <div className="@container">
              <div className="px-5 mt-5 w-full form-wrapper">
                <Form>
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
