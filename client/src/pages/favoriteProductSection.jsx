import React, { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";
import CardProduct from "@/pages/components/cardProduct";

const FavoriteProductSection = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(
  //         process.env.NEXT_PUBLIC_API_URL + "/products?populate=*",
  //         {
  //           headers: {
  //             Authorization: "bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
  //           },
  //         }
  //       );
  //       setData(res);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchData();
  //   console.log(data);
  // }, []);

  const address = `${process.env.NEXT_PUBLIC_API_URL}/products?populate=*`;
  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.data);
  const { data, error } = useSWR(address, fetcher);
  let loading = !data && !error;
  console.log(data);

  // const auth = `${process.env.NEXT_PUBLIC_API_TOKEN}`;

  // async function fetcher(url) {
  //   await axios
  //     .get(url, {
  //       headers: {
  //         Authorization: `Bearer ${auth}`,
  //       },
  //     })
  //     .then((res) => res.data);
  // }

  // const { data, error } = useSWR(address, fetcher);
  // console.log(data);

  return (
    <div className="mx-auto max-w-2xl py-12 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      {error && error.message}
      {loading && "loading"}
      <h2 className="text-2xl text-center font-nunito font-semibold tracking-tight  text-gray-700">
        Tema Favorit
      </h2>

      <div className="mt-6 overflow-x-scroll h-[300px] lg:overflow-x-auto lg:grid lg:grid-cols-4 flex   gap-6 ">
        {data?.map((item) => (
          <CardProduct item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteProductSection;
