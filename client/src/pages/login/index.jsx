import { Button, Spinner } from "flowbite-react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { FiSend } from "react-icons/fi";
import axios from "axios";
import FormikControl from "../components/utils/form/formikControl";
import icBrandLg from "/public/icons/icBrandLg.svg";
import Image from "next/image";
import { Google, Login, Facebook } from "iconsax-react";
import CustomButton from "../components/utils/customButton";
import Link from "next/link";

const LoginPage = () => {
  const initialvalues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("uups, field di perlukan disini "),
    password: Yup.string().required("uups, field di perlukan disini"),
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
    <div className=" bg-background w-full mx-auto flex justify-center items-center min-h-screen ">
      <div className="wrapper bg-white px-6 py-8 smooth-shadow max-w-xs md:max-w-md border border-border-card rounded-xl   ">
        <div className="header  mb-6">
          <Image
            priority
            src={icBrandLg}
            alt={"brand-eunoya"}
            className="w-32 mx-auto block"
          />
          <h1 className="capitalize  text-xl tracking-wide mt-8 mb-2 text-center">
            hallo zenoya 👋
          </h1>
          <p className="lowercase text-gray-400 text-center  text-xs">
            login dulu yuk sebelum memulai merasakan mudah nya bersama eunoya
          </p>
        </div>
        <Formik
          initialValues={initialvalues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => {
            const { isSubmitting } = props;
            return (
              <>
                <Form>
                  <FormikControl
                    control="input"
                    type="email"
                    label="email"
                    name="email"
                  />
                  <FormikControl
                    control="input"
                    type="password"
                    label="password"
                    name="password"
                  />
                  <div className="text-xs text-end my-5">
                    <Link href="#" className="text-blue-500">
                      lupa password?
                    </Link>
                  </div>

                  <div className="btn-login mt-8">
                        <CustomButton className="mt-10 w-full" type="submit">
                    {isSubmitting ? (
                      <Spinner
                        className="mr-2"
                        aria-label="Default status example"
                      />
                    ) : (
                      <span className="flex  text-sm items-center">
                        <Login className="mr-2 " />
                    Login
                      </span>
                    )}
                  </CustomButton>
                 </div>
                </Form>

                <div className="inline-flex items-center justify-center w-full">
                  <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                  <span className="absolute px-3 text-xs -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                    or
                  </span>
                </div>

                <div className="btn-login  flex gap-2">
                  <button className="w-full border border-border-card py-3 text-xs rounded-lg hover:bg-gray-100 transition  flex gap-3 justify-center items-center">
                    <Google className="text-red-500" /> 
                  </button>
                  <button className="w-full border border-border-card py-3 text-xs rounded-lg hover:bg-gray-100 transition flex gap-3 justify-center items-center">
                    <Facebook className="text-blue-500" /> 
                  </button>
                </div>
                <div className="text-center text-xs mt-5 text-gray-500">
                  belum punya akun?
                  <Link href='/register' className="text-blue-500 "> daftar disini</Link>
                </div>
              </>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
