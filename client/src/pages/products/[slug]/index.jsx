import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

const productSearch = () => {
  const router = useRouter();
  const { slug } = router.query;
  const address = ` https://dummyjson.com/products/search?q=${slug}`;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);
console.log(data);
  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;
  return <div>
    {JSON.stringify(data)}
  </div>;
};

export default productSearch;
