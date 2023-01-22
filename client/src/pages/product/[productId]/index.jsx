import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const Product = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="pt-6">
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li>
            <div className="flex items-center">
              <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                Men
              </a>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>

          <li>
            <div className="flex items-center">
              <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                Clothing
              </a>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>

          <li className="text-sm">
            <a
              href="#"
              aria-current="page"
              className="font-medium text-gray-500 hover:text-gray-600"
            >
              {" "}
              {data.title}{" "}
            </a>
          </li>
        </ol>
      </nav>

      <div className="mx-auto px-4  mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
            alt="Two each of gray, white, and black shirts laying flat."
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
              alt="Model wearing plain black basic tee."
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
              alt="Model wearing plain gray basic tee."
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        
      </div>

      <div className=" mt-7 rounded-lg max-w-2xl border border-gray-200 mx-4 px-4  py-5 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
        <div className="lg:col-span-2  lg:border-r lg:border-gray-200 lg:pr-8">
          <div className="text-2xl flex items-center justify-between font-bold tracking-tight text-gray-900 sm:text-3xl">
           <h1> {data.title}</h1>
            <span className="text-sm discount bg-red-500 px-3 py-1 rounded-lg text-white font-normal ">- 20%</span>
          </div>
        </div>

        <div className="mt-4 lg:row-span-3 lg:mt-0">
        
          <div className="text-3xl tracking-tight text-gray-900 flex items-center">
            <p>Rp {data.price} </p>
            <span className="line-through text-xs ml-4 text-gray-400  ">
              {" "}
              Rp {data.price}
            </span>
          </div>

          {/* <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                <svg
                  className="text-gray-900 h-5 w-5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>

                <svg
                  className="text-gray-900 h-5 w-5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>

                <svg
                  className="text-gray-900 h-5 w-5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>

                <svg
                  className="text-gray-900 h-5 w-5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>

                <svg
                  className="text-gray-200 h-5 w-5 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="sr-only"> {data.rating} out of 5 stars</p>
              <a
                href="#"
                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                117 reviews
              </a>
            </div>
          </div> */}
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
          {/* <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{data.description}</p>
            </div>
          </div> */}
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                <li className="text-gray-400">
                  <span className="text-gray-600">
                    Hand cut and sewn locally
                  </span>
                </li>

                <li className="text-gray-400">
                  <span className="text-gray-600">
                    Dyed with our proprietary colors
                  </span>
                </li>

                <li className="text-gray-400">
                  <span className="text-gray-600">
                    Pre-washed &amp; pre-shrunk
                  </span>
                </li>

                <li className="text-gray-400">
                  <span className="text-gray-600">Ultra-soft 100% cotton</span>
                </li>
              </ul>
            </div>
    

          {/* <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Details</h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">{data.description} </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
