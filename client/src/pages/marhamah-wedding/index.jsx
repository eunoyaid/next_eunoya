import React, { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";

const MarhamahWedding = () => {
  const [data, setData] = useState([]);

  // const address = process.env.NEXT_PUBLIC_API_URL + "/doas";
  // const fetcher = async (url) =>
  //   await axios.get(url).then((res) => res.data.data);
  // const { data, error } = useSWR(address, fetcher);
  // console.log(data);
  // let loading = !data && !error;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.NEXT_PUBLIC_API_URL + "/doas?populate=*",
          {
            headers: {
              Authorization: "bearer" + process.env.NEXT_PUBLIC_API_TOKEN,
            },
          }
        );
        setData(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data?.map((item) => (
        <div item={item} key={item.id}>
          <p>{item?.attributes.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MarhamahWedding;
