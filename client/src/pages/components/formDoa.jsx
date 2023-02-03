import { Button, Spinner } from "flowbite-react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import FormikControl from "./formikControl";
import toast, { Toaster } from "react-hot-toast";

const FormikContainer = () => {
  const [data, setData] = useState();

  const initialvalues = {
    name: "",
    doa: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("hmmm seperti nya kamu belum memasukan nama"),
    doa: Yup.string().required(
      "hmmm seperti nya kamu belum memberikan doa ke pasangan "
    ),
  });

  const Toast = () =>
    toast("wahh terimakasih doa nya", {
      icon: "😇",
    });

  const onSubmit = (values, actions) => {
    console.log(values);
    setData(values);
    Toast();
    actions.resetForm();
  };

  return (
    <div className="form-wrapper">
      <Toaster position="top-center" reverseOrder={false} />
      <Formik
        initialValues={initialvalues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => {
          const { isSubmitting } = props;
          return (
            <Form>
              <FormikControl
                control="input"
                type="text"
                label="nama"
                name="name"
              />
              <FormikControl
                control="textarea"
                type="text"
                label="Doa untuk pasangan"
                name="doa"
              />
              <Button className="mt-5 w-full" type="submit">
                {isSubmitting ? (
                  <Spinner
                    className="mr-2"
                    aria-label="Default status example"
                  />
                ) : (
                  "Submit"
                )}
              </Button>
            </Form>
          );
        }}
      </Formik>
      {JSON.stringify(data)}
    </div>
  );
};

export default FormikContainer;
