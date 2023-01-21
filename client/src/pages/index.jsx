import Head from "next/head";
import { useState } from "react";
import Guest from "./guest";
import User from "./user";

export default function Home() {

  const [session, setSession] = useState()

  return (
   <div className="main">
    <Head>
      <title>Home Page</title>
    </Head>
  {session?   <User/> :   <Guest/>}
   
   </div>
  )
}

