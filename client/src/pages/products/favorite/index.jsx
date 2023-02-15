import React from "react";
import useSWR from "swr";
import axios from "axios";
import Link from "next/link";
import CardProduct from "@/pages/components/cardProduct";

const FavoriteProduct = () => {
  const address = `https://dummyjson.com/products`;
  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.products.slice(0, 4));
  const { data, error } = useSWR(address, fetcher);
  let loading = !data && !error;

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      {error && error.message}
      {loading && "loading"}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Product pilihan
      </h2>

      <div className="mt-6 overflow-x-scroll h-[300px] lg:overflow-x-auto lg:grid lg:grid-cols-4 flex   gap-6 ">
        {data?.map((item) => (
          <CardProduct item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteProduct;
