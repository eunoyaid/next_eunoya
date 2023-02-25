import Link from "next/link";
import React from "react";

const CardProduct = ({ item }) => {
  return (
    <Link href={`product/${item.id}`}>
      <div className=" min-h-[16rem]  min-w-[150px] bg-white border border-gray-100 dark:bg-gray-800  dark:border-gray-700  p-3 rounded-xl  overflow-hidden  lg:aspect-none ">
        <div className=" min-h-[10rem] lg:min-h-56 relative lg:relative overflow-hidden   rounded-lg">
          <p className="absolute z-10 right-2 top-2 text-[10px] text-red-500 py-0.5 px-2  bg-red-200 rounded-lg lowercase ">
            - 10%
          </p>
          <img
            loading="lazy"
            src={item.images[0]}
            alt="Front of men&#039;s Basic Tee in black."
            className="h-full w-full  absolute object-cover object-center hover:scale-125 transition  "
          />
        </div>

        <div className="mt-4 block md:flex justify-between">
          <div>
            <h3 className="text-sm  text-gray-700 dark:text-secondary ">
              {item?.brand}
            </h3>
            <p className="mt-1 text-[10px] text-primary  dark:text-gray-800 py-1 px-2 inline-block bg-secondary dark:bg-gray-50 rounded-lg lowercase ">
              {item?.category}
            </p>
          </div>
          <div className="text-xs mt-1 flex justify-between md:mt-0 md:gap-2 text-gray-900">
            <p className="normal-price dark:text-secondary ">
              Rp {item?.price}
            </p>
            <p className="discount line-through animate-pulse text-gray-300">
              Rp {item.price + 200}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;
