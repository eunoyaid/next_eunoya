import React from "react";
import useSWR from "swr";
import axios from "axios";
import Link from "next/link";

const FavoriteProduct = () => {
  const address = `https://dummyjson.com/products`;
  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.products.slice(0, 4));
  const { data, error } = useSWR(address, fetcher);
  let loading = !data && !error;

  return (
    <div>
      <div>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Product pilihan
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data?.map((item) => (
              <div key={item.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={item.images[0]}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`product/${item.id}`}>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {item?.brand}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {item?.category}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Rp {item?.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteProduct;
