import axios from "axios";
import { Card } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

const Details = () => {
  const router = useRouter();
  const { slug } = router.query;
  const address = ` https://api.github.com/users/${slug}`;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);
 
   if (error) <p>Loading failed...</p>;
    if (!data) <h1>Loading...</h1>;
 
  
  return <div>
    <div className="max-w-sm">
 {JSON.stringify(data)}
</div>
  </div>;
};

export default Details;
