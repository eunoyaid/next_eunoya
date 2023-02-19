import React from "react";
import useSWR from "swr";
import axios from "axios";
import CardCustomProduct from "./cardCustomProduct";

const CustomThemeSection = () => {
  const address = `https://dummyjson.com/products`;
  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.products.slice(0, 4));
  const { data, error } = useSWR(address, fetcher);
  let loading = !data && !error;

  return (
    <div className="mx-auto max-w-2xl py-12 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      {error && error.message}
      {loading && "loading"}
          <div className="title-section text-center">
          <h2 className="text-2xl text-center font-nunito font-semibold tracking-tight  text-gray-700">
       Make Your Own
              </h2>
              <p className="text-gray-500 text-sm" >di buat berdasarkan cerita cinta mu</p>
      </div>

      <div className="mt-6 overflow-x-scroll h-[300px] lg:overflow-x-auto lg:grid lg:grid-cols-4 flex   gap-6 ">
        {data?.map((item) => (
          <CardCustomProduct item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CustomThemeSection;
