import Link from "next/link";
import React from "react";

const CardProduct = ({ item }) => {
  return (
    <Link href={`product/${item?.attributes.slug}`}>
      <div className="  h-[280px] lg:h-[300px]   min-w-[180px] bg-white border border-gray-100 dark:bg-gray-800  dark:border-gray-700  p-4 rounded-xl  overflow-hidden  lg:aspect-none ">
        <div className=" min-h-[10rem] lg:min-h-56 relative lg:relative overflow-hidden   rounded-lg">
          <p className="absolute z-10 right-2 top-2 text-[10px] text-red-500 py-0.5 px-2  bg-red-200 rounded-lg lowercase ">
            -{item?.attributes?.discount}%
          </p>

          <img
            loading="lazy"
            src={
              process.env.NEXT_PUBLIC_UPLOAD_URL +
              item?.attributes?.thumbnail?.data?.attributes?.url
            }
            alt="Front of men&#039;s Basic Tee in black."
            className="h-full w-full lef absolute object-cover object-center hover:scale-125 transition  "
          />
        </div>

        <div className="mt-4 block ">
          <div>
            <h3 className="text-sm capitalize lg:text-xl  text-gray-700 dark:text-secondary ">
              {item?.attributes?.title}
            </h3>

            <p className="mt-1 text-[8px] lg:text-xs text-primary  dark:text-gray-800 py-1 px-2 inline-block bg-secondary dark:bg-gray-50 rounded-lg lowercase ">
              {item?.attributes?.category.data.attributes?.title}
            </p>
          </div>
          <div className="text-xs mt-2 md:mt-3 flex justify-between md:gap-2 text-gray-900">
            <p className="normal-price lg:text-sm dark:text-secondary ">
              Rp {item?.attributes?.price}
            </p>
            <div className="discount line-through lg:text-sm animate-pulse text-gray-300">
              {item.attributes.discount ? (
                <p>
                  Rp
                  {item.attributes.price +
                    (item.attributes.price * item.attributes.discount) / 100}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;
