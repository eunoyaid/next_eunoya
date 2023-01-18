import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react'
import useSWR from "swr";
import SectionResult from './sectionResult';



const Details = () => {
    // const address = `https://jsonplaceholder.typicode.com/photos`;
    // const fetcher = async (url) =>
    //   await axios.get(url).then((res) => res.data.slice(0, 4));
    // const { data, error } = useSWR(address, fetcher);

    // if (error) <p>Loading failed...</p>;
    // if (!data) <h1>Loading...</h1>;
  
    const [query, setQuery] = useState()
 
const onSearch = (e) => {
  e.preventDefault()
  const inputQuery = e.target[0].value
  setQuery(inputQuery)
  
}
  
    return (
      <div style={{ padding: 40 }}>
    <form onSubmit={onSearch}>
      <input type="text" placeholder='cari user github' />
      <button className='bg-blue-400 px-4 py-2 rounded text-white'>cari</button>
    </form>
  {query &&  <SectionResult query={query} />}
      </div>
  )
}

export default Details