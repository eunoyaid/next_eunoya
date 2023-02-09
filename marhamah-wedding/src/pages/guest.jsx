import { Button } from "flowbite-react";
import React from "react";
import Header from "./components/header";
import Layout from "./components/layout";
import FavoriteProduct from "./products/favorite";

const Guest = () => {
  return (
    <Layout>
      <div className="main">
        <Header />
        <FavoriteProduct />
      </div>
    </Layout>
  );
};

export default Guest;
