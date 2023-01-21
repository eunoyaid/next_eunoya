
import React from "react";
import useSWR from "swr";
import axios from "axios";
import Link from "next/link";

const SectionResult = ({ query }) => {
  const address = ` https://api.github.com/search/users?q=${query}`;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);
  let loading = !data && !error;





  return (
    <div className="flex gap-5 flex-wrap">
      {error && error.message}
      {loading && "loading"}
      {data &&
        data.items.map((item, index) => {
          return (
            <ul   key={index}>
              <li >
             
                <Link href={`github/${item.login}`}>
                 <div className="h-24 w-24 mb-10 rounded border " >
                    <img src={item.avatar_url} alt="" />
                    <p>{item.login}</p>
                 </div>
                </Link>
              </li>
            </ul>
          );
        })}
    </div>
  );
};

export default SectionResult;
