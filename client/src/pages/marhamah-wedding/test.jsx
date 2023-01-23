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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(
  //         process.env.NEXT_PUBLIC_API_URL + "/doas?populate=*",
  //         {
  //           headers: {
  //             Authorization: "bearer" + process.env.NEXT_PUBLIC_API_TOKEN,
  //           },
  //         }
  //       );
  //       setData(res.data.data);
  //       console.log(res.data.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(process.env.NEXT_PUBLIC_API_URL_TEST);
        setData(res.data);
        // console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className=" ">
      {data?.map((item) => (
        <div   key={item.id}  className="list-doa w-96 p-2 bg-slate-300  rounded-xl border border-gray-50 ">
        
            <ul className="">
              <li>
                <p>{item?.name}</p>
                <span> doa mereka : {item?.doa}</span>
              </li>
            </ul>
         
        </div>
      ))}
    </div>
  );
};

export default MarhamahWedding;
