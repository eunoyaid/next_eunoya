import { Button, Spinner } from "flowbite-react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import FormikControl from "./formikControl";
import { FiSend } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const FormGift = () => {
  // const [data, setData] = useState();

  const initialvalues = {
    name: "",
    amount: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("hmmm seperti nya kamu belum memasukan nama"),
    amount: Yup.number().required(
      "hmmm seperti nya kamu belum memasukan nominal hadiah "
    ),
  });

  const Toast = () =>
    toast("hihi terimakasih hadiah nya", {
      icon: "😁",
    });

  const onSubmit = async (values, actions) => {
    try {
      const response = await axios.post("http://localhost:1337/api/gifts", {
        data: values,
      });
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
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
                control="input"
                type="number"
                label="Nominal Hadiah"
                name="amount"
              />
              <Button className="mt-5 w-full" type="submit">
                {isSubmitting ? (
                  <Spinner
                    className="mr-2"
                    aria-label="Default status example"
                  />
                ) : (
                  <span className="flex items-center">
                    {" "}
                    <FiSend className="mr-2" />
                    Submit
                  </span>
                )}
              </Button>
            </Form>
          );
        }}
      </Formik>
      {/* {JSON.stringify(data)} */}
    </div>
  );
};

export default FormGift;
