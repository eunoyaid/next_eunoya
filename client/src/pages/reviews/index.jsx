import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import FormikControl from "../components/utils/form/formikControl";
import CustomButton from "../components/utils/customButton";
import { Spinner } from "flowbite-react";
import FormRatings from "form-ratings";

const Reviews = () => {
  const initialvalues = {
    rating: "",
    review: "",
  };

  const validationSchema = Yup.object({
    rating: Yup.string().required("uups, field di perlukan disini "),
    review: Yup.string().required("uups, field di perlukan disini"),
  });

  const onSubmit = async (values, actions) => {
    console.log(values);
    // try {
    //   const response = await axios.post("http://localhost:1337/api/doas", {
    //     data: values,
    //   });
    //   console.log(response);
    // } catch (error) {
    //   console.log(error.message);
    // }

    actions.resetForm();
  };
  return (
    <div className="container">
      <p className="text-center capitalize font-semibold font-nunito">
        product Review
      </p>

      <div className="product-review p-3 mt-5 relative flex gap-4 rounded-lg border border-border-card bg-white">
        <div className="relative  w-24 overflow-hidden rounded-lg">
          <Image priority
            className="absolute object-cover h-full w-full"
            width={100}
            height={100}
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt=""
          />
        </div>
        <div className="desc">
          <p className="title capitalize text-lg">floral</p>
          <span className="category">website wedding invitation</span>
          <div className="reviews ">
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Rating star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="ml-2 text-xs ">4.95</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400" />
              <Link
                href="#"
                className="text-xs   underline hover:no-underline "
              >
                73 reviews
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 mt-3  text-center gap-4 rounded-lg border border-border-card bg-white ">
        <p className=" text-sm mb-4">berikan review disini</p>

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
                  <Field className='mb-5' name="rating" type="number" as={FormRatings} />
                  <FormikControl
                    control="textarea"
                    type="text"
                    label="ceritakan pendapat mu tentang produk ini"
                    name="review"
                  />

                  <div className="btn-login mt-8">
                    <CustomButton className="mt-10 w-full" type="submit">
                      {isSubmitting ? (
                        <Spinner
                          className="mr-2"
                          aria-label="Default status example"
                        />
                      ) : (
                        <span className="flex  text-sm items-center">
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
      </div>
    </div>
  );
};

export default Reviews;
