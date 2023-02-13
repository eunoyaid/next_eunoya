import Link from "next/link";
import React from "react";
import useSWR from "swr";
import axios from "axios";

const CardProduct = ({ query }) => {
  const address = `https://dummyjson.com/products/search?q=${query}`;
  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.products);
  const { data, error } = useSWR(address, fetcher);
  let loading = !data && !error;
  return (
    <div className="group relative">
      {error && error.message}
      {loading && "loading"}
      <div className="mx-auto max-w-2xl py-4 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {data?.map((item) => (
            <Link href={`product/${item.id}`}>
              <div className="min-h-80  bg-white border border-gray-100 p-3 rounded-xl  overflow-hidden  lg:aspect-none lg:h-80">
                <div className="thumbnail h-32 relative overflow-hidden   bg-gray-500 rounded-lg">
                  <p className="discount-badge ">- 10%</p>
                  <img
                    src={item.images[0]}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full  max-h-44 object-cover object-center hover:scale-125 transition  "
                  />
                </div>

                <div className="mt-4 block md:flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{item?.brand}</h3>
                    <p className="mt-1 text-[10px] text-primary py-1 px-2 inline-block bg-secondary rounded-lg lowercase ">
                      {item?.category}
                    </p>
                  </div>
                  <div className="text-xs mt-1 flex justify-between md:mt-0  text-gray-900">
                    <p className="normal-price">Rp {item?.price}</p>
                    <p className="discount line-through animate-pulse text-gray-300">
                      Rp {item.price + 200}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
