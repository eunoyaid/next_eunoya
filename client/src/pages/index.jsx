import Head from "next/head";
import Header from "./components/header";

import FavoriteProduct from "./products/favorite";


export default function Home() {

  return (
    <div className="main">
      <Head>
        <title>Home Page</title>
      </Head>
    

      <Header />
      <FavoriteProduct />
    </div>
  );
}
