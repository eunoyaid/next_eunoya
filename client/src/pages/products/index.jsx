import React from "react";
import useSWR from "swr";
import axios from "axios";
import Link from "next/link";

const Products = () => {
  const address = `https://dummyjson.com/products`;
  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.products);
  const { data, error } = useSWR(address, fetcher);
  let loading = !data && !error;
  console.log(data);
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {data?.map((item) => (
          <div key={item.id} className="group relative">
            <Link href={`product/${item.id}`}>
              <div className="min-h-80  bg-white border border-gray-100 p-3 rounded-xl  overflow-hidden  lg:aspect-none lg:h-80">
                <div className="thumbnail h-32 relative overflow-hidden  bg-gray-500 rounded-lg">
                  <img
                    src={item.images[0]}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full  max-h-44 object-cover object-center hover:scale-125 transition  "
                  />
                </div>

                <div className="mt-4 block md:flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{item?.brand}</h3>
                    <p className="mt-1 text-xs text-primary py-1 px-2 inline-block bg-secondary rounded-lg lowercase ">
                      {item?.category}
                    </p>
                  </div>
                  <p className="text-xs mt-1 md:mt-0 font-medium text-gray-900">
                    Rp {item?.price}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
