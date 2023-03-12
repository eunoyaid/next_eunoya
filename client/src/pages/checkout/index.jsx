import { FileInput, Label, Spinner, Tabs } from "flowbite-react";
import { Card, CardPos, CloseCircle, Login, Warning2 } from "iconsax-react";
import Image from "next/image";
import React from "react";
import CustomButton from "@/pages/components/utils/customButton";
import * as Yup from "yup";
import { Form, Formik } from "formik";

const onDelete = () => {
  console.log("terhpus");
};

const onSubmit = async (values, actions, ctx) => {
  console.log("test");
  try {
    // const response = await axios.post(
    //   `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
    //   values
    // );
    // const cookies = nookies.get(ctx);
    // {
    //   response.data.jwt &&
    //     nookies.set(ctx, "token", response.data.jwt, {
    //       maxAge: 30 * 24 * 60 * 60,
    //       path: "/",
    //     });
    //   Router.replace("/");
    //   return { cookies };
    // }
  } catch (error) {
    const ToastError = () =>
      toast.error("username atau password mungkin salah");
    ToastError();
  }
};

const Checkout = () => {
  const initialvalues = {
    image: "",
  };

  const validationSchema = Yup.object({
    image: Yup.string().required("uups, image di perlukan disini "),
  });
  return (
    <div className="container max-w-3xl">
      <p className="text capitalize font-nunito text-textPrimary dark:text-secondary flex gap-x-2 items-center">
        {" "}
        <CardPos /> checkout
      </p>

      <div className="border max-h-60 overflow-y-scroll items-center mt-4 border-border-card dark:border-gray-800 rounded-xl p-4 bg-white dark:bg-gray-800">
        <div className="product-checkout flex justify-between items-center mb-3">
          <div className="product flex items-center gap-x-4  ">
            <div className="thumbnail relative overflow-hidden h-14 w-14 rounded-lg">
              <Image
                src={`https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
                className="absolute w-full h-full object-cover"
                width={100}
                height={100}
                alt="thumbnail"
              />
            </div>
            <div className="desc ">
              <div className="product-name capitalize text-sm">floral</div>
              <p className="category">website wedding invitation</p>
            </div>
          </div>
          <CloseCircle
            onClick={onDelete}
            className="cursor-pointer w-5 h-5 text-gray-400 hover:text-red-500"
          />
        </div>
        <div className="product-checkout flex justify-between items-center mb-3">
          <div className="product flex items-center gap-x-4  ">
            <div className="thumbnail relative overflow-hidden h-14 w-14 rounded-lg">
              <Image
                src={`https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
                className="absolute w-full h-full object-cover"
                width={100}
                height={100}
                alt="thumbnail"
              />
            </div>
            <div className="desc ">
              <div className="product-name capitalize text-sm">floral</div>
              <p className="category">website wedding invitation</p>
            </div>
          </div>
          <CloseCircle
            onClick={onDelete}
            className="cursor-pointer w-5 h-5 text-gray-400 hover:text-red-500"
          />
        </div>
        <div className="product-checkout flex justify-between items-center mb-3">
          <div className="product flex items-center gap-x-4  ">
            <div className="thumbnail relative overflow-hidden h-14 w-14 rounded-lg">
              <Image
                src={`https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
                className="absolute w-full h-full object-cover"
                width={100}
                height={100}
                alt="thumbnail"
              />
            </div>
            <div className="desc ">
              <div className="product-name capitalize text-sm">floral</div>
              <p className="category">website wedding invitation</p>
            </div>
          </div>
          <CloseCircle
            onClick={onDelete}
            className="cursor-pointer w-5 h-5 text-gray-400 hover:text-red-500"
          />
        </div>
        <div className="product-checkout flex justify-between items-center mb-3">
          <div className="product flex items-center gap-x-4  ">
            <div className="thumbnail relative overflow-hidden h-14 w-14 rounded-lg">
              <Image
                src={`https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
                className="absolute w-full h-full object-cover"
                width={100}
                height={100}
                alt="thumbnail"
              />
            </div>
            <div className="desc ">
              <div className="product-name capitalize text-sm">floral</div>
              <p className="category">website wedding invitation</p>
            </div>
          </div>
          <CloseCircle
            onClick={onDelete}
            className="cursor-pointer w-5 h-5 text-gray-400 hover:text-red-500"
          />
        </div>
      </div>

      <div className="checkout-detail border dark:border-gray-800  mt-4 border-border-card rounded-xl p-4 bg-white dark:bg-gray-800">
        <div className="flex justify-between">
          <p className="text-sm capitalize text-textPrimary dark:text-white">
            rincian pembayaran
          </p>
          <p className="text-sm uppercase text-primary dark:text-white">
            invoice#1243
          </p>
        </div>
        <ul className="product-list">
          <li className="flex justify-between text-xs mt-3 mb-2 dark:text-secondary text-textSecondary">
            <p className="title">Floral</p>
            <p className="price">Rp.75000</p>
          </li>
          <li className="flex justify-between text-xs mt-3 mb-2 dark:text-secondary text-textSecondary">
            <p className="title">Floral</p>
            <p className="price">Rp.75000</p>
          </li>
        </ul>
        <hr />
        <p className="total text-xs text-end capitalize mt-2 ">
          total : <span className="text-green-400">Rp.150000</span>
        </p>
        <p className="text-sm capitalize mt-4 text-textPrimary dark:text-white">
          instruksi pembayaran
        </p>
        <Tabs.Group aria-label="Tabs with underline" style="underline">
          <Tabs.Item active={true} title="Manual">
            <p className="text-xs">
              silahkan selsaikan pembayran sesuai dengan nominal yang tertera ke
              rekening bank di bawah ini
            </p>
            <div className="list-bank my-3 ">
              <div className="transfer-bank flex   items-center gap-x-3">
                <Card />
                <div className="info-transfer ">
                  <div className="name text-xs">Syifa</div>
                  <div className="no-rek text-xs"> (BRI) 05444414154</div>
                </div>
              </div>
            </div>
            <p className="text-xs">
              setelah melakukan pembayaran harap upload bukti transfer disni
              sertakan nomer invoice pada keterangan
            </p>
            {/* <div className="flex items-center justify-center mt-3 w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX 5 MB)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <div className="mt-4">
              <CustomButton> konfirmasi</CustomButton>
            </div> */}

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
                      {/* <FormikControl
                        control="input"
                        type="email"
                        label="email"
                        name="identifier"
                      /> */}
                      <input type="file" name="image" onChange={(e) => setFieldValue('image', e.target.files[0])} />
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
                              submit
                            </span>
                          )}
                        </CustomButton>
                      </div>
                    </Form>
                  </>
                );
              }}
            </Formik>
          </Tabs.Item>
          <Tabs.Item title="Automatis">
            <div className="flex gap-x-2">
              {" "}
              <Warning2 />
              Segera hadir
            </div>
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
};

export default Checkout;
