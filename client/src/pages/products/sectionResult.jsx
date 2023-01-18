import { useRouter } from 'next/router';
import React from 'react'
import useSWR from "swr";
import axios from 'axios';
import Link from 'next/link';

const SectionResult = ({query}) => {
    const address = ` https://api.github.com/search/users?q=${query}`;
    const fetcher = async (url) =>
      await axios.get(url).then((res) => res.data);
    const { data, error } = useSWR(address, fetcher);

  let loading = !data && !error
  return (
    <div>
        <p>hasil : {query}</p>
        {loading && 'loading'}
   {data && data.items.map((item, index)=>{
    return (
        <ul key={index}>
            <li> <Link href={`products/${item.login}`}> {item.login} details</Link> </li>
       
        </ul>
    )
   })}
    </div>
  )
}

export default SectionResult