import Link from "next/link";
import React from "react";
import useSWR from "swr";
import axios from "axios";
import CardProduct from "./cardProduct";
import Skeleton from "./skeleton";
import PageNotFound from "./pageNotFound";

const SearchProduct = ({ query }) => {
  const address = `${process.env.NEXT_PUBLIC_API_URL}/products/?filters[title][$eq]=${query}&populate=*`;

  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.data);
  const { data, error } = useSWR(address, fetcher);
  let loading = !data && !error;
  console.log(data);
  return (
    <div className="group relative">
      {error && error.message}
      {
        loading && (
          <div className="mx-auto max-w-2xl py-4 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {data?.map((item) => (
                <Skeleton key={item.id} />
              ))}
            </div>
          </div>
        )

        // <PageNotFound />
      }
      <div className="mx-auto max-w-2xl py-4 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {data?.map((item) => (
            <CardProduct item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
