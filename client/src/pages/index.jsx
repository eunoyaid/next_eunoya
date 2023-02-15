import Head from "next/head";
import Header from "./components/header";
import Feature from "./feature";
import FavoriteProduct from "./products/favorite";

export default function Home() {


  return (
    <div className="main pt-12">
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <Feature/>
      <FavoriteProduct />
    </div>
  );
}
