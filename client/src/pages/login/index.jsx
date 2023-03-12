import { Spinner } from "flowbite-react";
sub
import * as Yup from "yup";
import axios from "axios";
import FormikControl from "../components/utils/form/formikControl";
import icBrandLg from "/public/icons/icBrandLg.svg";
import Image from "next/image";
import { Google, Login, Facebook } from "iconsax-react";
import CustomButton from "../components/utils/customButton";
import Link from "next/link";
import nookies from "nookies";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import icGoogle from "/public/icons/icGoogle.svg";

// export async function getServerSideProps(ctx) {
//   const cookies = nookies.get(ctx);
//   if (cookies.token) {
//     return {
//       redirect: {
//         destination: "/",
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// }

const LoginPage = ({ providers }) => {
  const Router = useRouter();

  const initialvalues = {
    identifier: "",
    password: "",
  };

  const validationSchema = Yup.object({
    identifier: Yup.string().required("uups, email di perlukan disini "),
    password: Yup.string().required("uups, password di perlukan disini"),
  });

  const doLogin = async (values, actions, ctx) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
        values
      );

      const cookies = nookies.get(ctx);
      {
        response.data.jwt &&
          nookies.set(ctx, "token", response.data.jwt, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
        Router.replace("/");
        return { cookies };
      }
    } catch (error) {
      const ToastError = () =>
        toast.error("username atau password mungkin salah");
      ToastError();
    }
  };

  return (
    <div className=" bg-background w-full mx-auto flex justify-center items-center min-h-screen ">
      <Head>
        <title>Login Page</title>
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
            hallo zenoya 👋
          </h1>
          <p className="lowercase text-gray-400 text-center  text-xs">
            login dulu yuk sebelum memulai merasakan mudah nya bersama eunoya
          </p>
        </div>
        <Formik
          initialValues={initialvalues}
          validationSchema={validationSchema}
          onSubmit={doLogin}
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
                    name="identifier"
                  />
                  <FormikControl
                    autocomplete="on"
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
              </>
            );
          }}
        </Formik>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="w-full border border-border-card py-2 text-xs rounded-lg hover:bg-gray-100 transition  flex gap-3 justify-center items-center"
              onClick={() => signIn(provider.id)}
            >
              <Image src={icGoogle} height={35} width={35} alt="ic-google" />
              masuk dengan {provider.name}
            </button>
          </div>
        ))}
        <div className="text-center text-xs mt-5 text-gray-500">
          belum punya akun?
          <Link href="/register" className="text-blue-500 ">
            {" "}
            daftar disini
          </Link>
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}

export default LoginPage;
