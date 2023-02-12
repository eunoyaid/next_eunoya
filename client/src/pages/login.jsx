import { Button, Spinner } from "flowbite-react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import axios from "axios";
import { motion } from "framer-motion";
import FormikControl from "./components/formikControl";

const Login = () => {
  const initialvalues = {
    name: "",
    email: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("hmmm seperti nya kamu belum memasukan nama"),
    email: Yup.string().required("email belum kamu tulis nih"),
  });

  const onSubmit = async (values, actions) => {
    console.log(values);
    try {
      const response = await axios.post("http://localhost:1337/api/doas", {
        data: values,
      });
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }

    actions.resetForm();
  };

  return (
    <div className="@container  flex justify-center items-center w-full mx-auto  min-h-screen ">
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
                type="email"
                label="Email"
                name="email"
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
                    Submipt
                  </span>
                )}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
