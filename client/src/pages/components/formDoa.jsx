import { Button, Spinner } from "flowbite-react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./utils/form/formikControl";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import axios from "axios";
import { motion } from "framer-motion";

const FormDoa = () => {
  const radioOptions = [
    { key: "Ya, saya akan hadir", value: "Ya, saya akan hadir" },
    {
      key: "Maaf, saya ada kesibukan lain",
      value: "Maaf, saya ada kesibukan lain",
    },
  ];

  const initialvalues = {
    name: "",
    isHadir: "",
    doa: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("hmmm seperti nya kamu belum memasukan nama"),
    isHadir: Yup.string().required(
      "kamu belum memberitau kehadiran mu di acara"
    ),
    doa: Yup.string().required(
      "hmmm seperti nya kamu belum memberikan doa ke pasangan "
    ),
  });

  const Toast = () =>
    toast("wahh terimakasih doa nya", {
      icon: "😇",
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
    Toast();

    actions.resetForm();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="form-wrapper"
    >
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
              <FormikControl
                control="radio"
                options={radioOptions}
                label="Bisakah kamu berhadir?"
                name="isHadir"
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
    </motion.div>
  );
};

export default FormDoa;
