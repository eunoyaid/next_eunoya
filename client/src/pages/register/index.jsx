import { Spinner } from "flowbite-react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import FormikControl from "../components/utils/form/formikControl";
import icBrandLg from "/public/icons/icBrandLg.svg";
import Image from "next/image";
import { Google, Login, Facebook } from "iconsax-react";
import CustomButton from "../components/utils/customButton";
import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";
import nookies from "nookies";

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);
  if (cookies.token) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: {},
  };
}

const RegisterPage = () => {
  const initialvalues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("uups, username di perlukan disini "),
    email: Yup.string().required("uups, field di perlukan disini "),
    password: Yup.string().required("uups, field di perlukan disini"),
  });

  const doRegister = async (values, actions) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/local/register`,
        values
      );
      const Toast = () =>
        toast("silahkan cek email kamu ya ", {
          icon: "😊",
        });
      Toast();
      actions.resetForm();
    } catch (error) {
      const ToastError = () => toast.error("ada yang salah nih, coba lagi ya.");
      ToastError();
    }
  };

  return (
    <div className=" bg-background w-full mx-auto flex justify-center items-center min-h-screen ">
      <Head>
        <title>Register Page</title>
      </Head>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="wrapper bg-white px-6 py-8 smooth-shadow max-w-xs md:max-w-md border border-border-card rounded-xl   ">
        <div className="header  mb-6">
          <Image
            priority
            src={icBrandLg}
            alt={"brand-eunoya"}
            className="w-32 mx-auto block"
          />
          <h1 className="capitalize  text-xl tracking-wide mt-8 mb-2 text-center">
            ayo gabung
          </h1>
          <p className="lowercase text-gray-400 text-center  text-xs">
            daftar dulu ya supaya eunoya bisa kenal kamu 😁 tak kenal maka tak
            sayang kan
          </p>
        </div>
        <Formik
          initialValues={initialvalues}
          validationSchema={validationSchema}
          onSubmit={doRegister}
        >
          {(props) => {
            const { isSubmitting } = props;
            return (
              <>
                <Form>
                  <FormikControl
                    control="input"
                    type="text"
                    label="username"
                    name="username"
                  />
                  <FormikControl
                    control="input"
                    type="email"
                    label="email"
                    name="email"
                  />
                  <FormikControl
                    autocomplete="on"
                    control="input"
                    type="password"
                    label="password"
                    name="password"
                  />

                  <div className="btn-register mt-8">
                    <CustomButton className="mt-10 w-full" type="submit">
                      {isSubmitting ? (
                        <span className="flex gap-3 text-sm items-center">
                          <Spinner aria-label="Spinner button example" />
                          <span className="pl-3">Tunggu ya...</span>
                        </span>
                      ) : (
                        <span className="flex  text-sm items-center">
                          <Login className="mr-2 " />
                          Daftar
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
              </>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterPage;
